import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'motion/react';

// ─── Glyph scramble ────────────────────────────────────────────────────────
const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*!?><[]{}|';

function useScramble(target: string, active: boolean) {
  const [out, setOut] = useState(target);
  const raf = useRef(0);
  const iter = useRef(0);
  const frame = useRef(0);
  useEffect(() => {
    if (!active) {
      raf.current = requestAnimationFrame(() => {
        setOut(target);
        iter.current = 0;
      });
      return () => cancelAnimationFrame(raf.current);
    }
    const run = () => {
      setOut(
        target
          .split('')
          .map((c, i) => {
            if (c === ' ' || c === '\n') return c;
            if (i < iter.current) return target[i]!;
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)]!;
          })
          .join('')
      );
      if (frame.current++ % 2 === 0) iter.current++;
      if (iter.current <= target.length) raf.current = requestAnimationFrame(run);
      else {
        setOut(target);
        iter.current = 0;
        frame.current = 0;
      }
    };
    raf.current = requestAnimationFrame(run);
    return () => cancelAnimationFrame(raf.current);
  }, [active, target]);
  return out;
}

// ─── Live clock ────────────────────────────────────────────────────────────
function LiveClock() {
  const [t, setT] = useState('');
  useEffect(() => {
    const upd = () => {
      const n = new Date();
      setT(
        [n.getHours(), n.getMinutes(), n.getSeconds()]
          .map((v) => String(v).padStart(2, '0'))
          .join(':')
      );
    };
    upd();
    const id = setInterval(upd, 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="tc-clock">{t}</span>;
}

// ─── Typewriter line ────────────────────────────────────────────────────────
function TypeLine({
  text,
  delay = 0,
  onDone,
}: {
  text: string;
  delay?: number;
  onDone?: () => void;
}) {
  const [shown, setShown] = useState('');
  useEffect(() => {
    let i = 0;
    const t = setTimeout(() => {
      const id = setInterval(() => {
        if (i < text.length) {
          i++;
          setShown(text.slice(0, i));
        } else {
          clearInterval(id);
          onDone?.();
        }
      }, 20);
      return () => clearInterval(id);
    }, delay);
    return () => clearTimeout(t);
  }, [text, delay, onDone]);
  return <span>{shown}</span>;
}

// ─── Signal rings ────────────────────────────────────────────────────────────
function SignalRings() {
  return (
    <div className="tc-rings" aria-hidden="true">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="tc-ring" style={{ '--ri': i } as React.CSSProperties} />
      ))}
      <div className="tc-ring-core" />
    </div>
  );
}

// ─── Console header ──────────────────────────────────────────────────────────
function ConsoleHeader() {
  const [d1, sd1] = useState(false);
  const [d2, sd2] = useState(false);
  return (
    <div className="tc-ch">
      {/* Traffic bar */}
      <div className="tc-cb">
        <div className="tc-cdot" style={{ background: '#FF5F57' }} />
        <div className="tc-cdot" style={{ background: '#FFBD2E' }} />
        <div className="tc-cdot" style={{ background: '#28C941' }} />
        <span className="tc-ctitle">KODDEVZ — TRANSMISSION_CONSOLE</span>
        <LiveClock />
      </div>
      {/* Boot log */}
      <div className="tc-clog">
        <div className="tc-cline">
          <span className="tc-cprompt">$</span>{' '}
          <TypeLine
            text="init secure_channel --encrypt aes256"
            delay={400}
            onDone={() => sd1(true)}
          />
          {d1 && <span className="tc-cok"> [OK]</span>}
        </div>
        {d1 && (
          <div className="tc-cline">
            <span className="tc-cprompt">$</span>{' '}
            <TypeLine text="await connection.establish()" delay={80} onDone={() => sd2(true)} />
            {d2 && <span className="tc-cok"> [READY]</span>}
          </div>
        )}
        {d2 && (
          <div className="tc-cline">
            <span className="tc-cprompt">{'>'}</span>{' '}
            <span className="tc-crdy">TRANSMISSION CONSOLE ONLINE</span>
            <span className="tc-blink">_</span>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Terminal input ──────────────────────────────────────────────────────────
function TermField({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  maxLen,
  idx,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  maxLen?: number;
  idx: number;
}) {
  const [focused, setFocused] = useState(false);
  const lbl = useScramble(label, focused);
  return (
    <motion.div
      className="tc-field"
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.25 + idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="tc-flabel">
        <span className="tc-fprompt">{'>'}</span>
        <span className={focused ? 'tc-fn tc-fn-on' : 'tc-fn'}>{lbl}</span>
        {maxLen && (
          <span className="tc-fcount">
            {value.length}/{maxLen}
          </span>
        )}
      </div>
      {type === 'textarea' ? (
        <textarea
          className="tc-input tc-ta"
          rows={3}
          value={value}
          maxLength={maxLen}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          aria-label={label}
        />
      ) : (
        <input
          className="tc-input"
          type={type}
          value={value}
          required
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          aria-label={label}
        />
      )}
      <motion.div
        className="tc-fbar"
        animate={{ scaleX: focused ? 1 : 0, opacity: focused ? 1 : 0 }}
        transition={{ duration: 0.22 }}
      />
    </motion.div>
  );
}

// ─── Magnetic transmit button ────────────────────────────────────────────────
function TransmitBtn({ status }: { status: 'idle' | 'tx' | 'sent' }) {
  const ref = useRef<HTMLButtonElement>(null);
  const mx = useMotionValue(0),
    my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 160, damping: 14 });
  const sy = useSpring(my, { stiffness: 160, damping: 14 });
  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left - r.width / 2) * 0.22);
    my.set((e.clientY - r.top - r.height / 2) * 0.22);
  };
  return (
    <motion.button
      ref={ref}
      type="submit"
      disabled={status !== 'idle'}
      className={`tc-btn tc-btn-${status}`}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      whileHover={status === 'idle' ? { scale: 1.015 } : {}}
      whileTap={{ scale: 0.97 }}
    >
      <AnimatePresence mode="wait">
        {status === 'idle' && (
          <motion.span
            key="i"
            className="tc-brow"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
          >
            <span>TRANSMIT</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            >
              →
            </motion.span>
          </motion.span>
        )}
        {status === 'tx' && (
          <motion.span
            key="t"
            className="tc-brow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="tc-bdot"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 0.7, delay: i * 0.18, repeat: Infinity }}
              />
            ))}
            <span>TRANSMITTING</span>
          </motion.span>
        )}
        {status === 'sent' && (
          <motion.span
            key="s"
            className="tc-brow"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <span className="tc-bpulse" />
            <span>SIGNAL RECEIVED</span>
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

// ─── Right broadcast panel ────────────────────────────────────────────────────
function Broadcast({ scramble }: { scramble: boolean }) {
  const h = useScramble('READY\nTO\nINTERFACE', scramble);
  return (
    <div className="tc-bc">
      {/* Tag */}
      <motion.div
        className="tc-bctag"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <span className="tc-bctag-line" />
        <span>S08 / CONTACT</span>
        <span className="tc-bctag-line" />
      </motion.div>

      {/* Heading */}
      <h2 className="tc-bchead">
        {h.split('\n').map((line, i) => (
          <motion.span
            key={i}
            className={`tc-bcline ${i === 2 ? 'tc-bcline-out' : ''}`}
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {line}
          </motion.span>
        ))}
      </h2>

      <SignalRings />

      {/* Status bar */}
      <div className="tc-bcstatus">
        <span className="tc-bcstatus-dot" />
        <span>CHANNEL OPEN</span>
        <span className="tc-bcsep">·</span>
        <span>256-BIT ENC</span>
        <span className="tc-bcsep">·</span>
        <LiveClock />
      </div>

      {/* Subtle coord label */}
      <div className="tc-bccoord" aria-hidden="true">
        <span>48.8566° N</span>
        <span>2.3522° E</span>
      </div>
    </div>
  );
}

// ─── Main ──────────────────────────────────────────────────────────────────
export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [status, setStatus] = useState<'idle' | 'tx' | 'sent'>('idle');
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const onMove = useCallback(
    (e: React.MouseEvent) => setCoords({ x: e.clientX, y: e.clientY }),
    []
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (status !== 'idle') return;
    setStatus('tx');
    setTimeout(() => setStatus('sent'), 2000);
  };

  return (
    <>
      {/* ── Styles ── */}
      <style>{`
        /* Tokens — inherit from site theme, override accent */
        .tc-root {
          --tc-accent: #CAFF33;
          --tc-ink:    var(--color-text-primary, #07080F);
          --tc-bg:     var(--color-background-primary, #F5F2EB);
          --tc-surf:   var(--color-background-secondary, #FFFFFF);
          --tc-raised: var(--color-background-tertiary, #EDE9DF);
          --tc-border: var(--color-border-tertiary, rgba(0,0,0,0.12));
          --tc-dim:    var(--color-text-secondary, #6B7280);
          --tc-mono:   'JetBrains Mono', 'Courier New', monospace;
          --tc-disp:   'Bebas Neue', 'Arial Black', sans-serif;
        }
        /* Dark mode — deeper palette on dark bg */
        @media (prefers-color-scheme: dark) {
          .tc-root {
            --tc-accent: #CAFF33;
            --tc-ink:    #EDECE6;
            --tc-bg:     #07080F;
            --tc-surf:   #0D0F1A;
            --tc-raised: #131728;
            --tc-border: rgba(255,255,255,0.08);
            --tc-dim:    #555980;
          }
          .tc-console { border-right-color: var(--tc-border); }
          .tc-clog    { background: var(--tc-surf); border-color: var(--tc-border); }
          .tc-cb      { background: var(--tc-raised); border-color: var(--tc-border); }
          .tc-input   { color: var(--tc-ink); }
          .tc-input::placeholder { color: var(--tc-dim); }
          .tc-btn-idle { background: var(--tc-accent); color: #07080F; }
          .tc-bc       { background: var(--tc-accent); }
          .tc-bchead .tc-bcline       { color: #07080F; }
          .tc-bchead .tc-bcline-out   { -webkit-text-stroke-color: #07080F; }
          .tc-bcstatus                { color: rgba(7,8,15,.5); }
          .tc-bcstatus-dot            { background: #07080F; }
          .tc-bctag                   { color: rgba(7,8,15,.4); }
          .tc-bctag-line              { background: rgba(7,8,15,.15); }
          .tc-ring                    { border-color: rgba(7,8,15,.12); }
          .tc-ring-core               { background: rgba(7,8,15,.35); }
          .tc-bccoord                 { color: rgba(7,8,15,.18); }
        }
        [data-theme="dark"] .tc-root,
        .dark .tc-root {
          --tc-accent: #CAFF33;
          --tc-ink:    #EDECE6;
          --tc-bg:     #07080F;
          --tc-surf:   #0D0F1A;
          --tc-raised: #131728;
          --tc-border: rgba(255,255,255,0.08);
          --tc-dim:    #555980;
        }
        [data-theme="dark"] .tc-console,
        .dark .tc-console { border-right-color: var(--tc-border); }
        [data-theme="dark"] .tc-clog,
        .dark .tc-clog    { background: var(--tc-surf); border-color: var(--tc-border); }
        [data-theme="dark"] .tc-cb,
        .dark .tc-cb      { background: var(--tc-raised); border-color: var(--tc-border); }
        [data-theme="dark"] .tc-input,
        .dark .tc-input   { color: var(--tc-ink); }
        [data-theme="dark"] .tc-btn-idle,
        .dark .tc-btn-idle { background: var(--tc-accent); color: #07080F; }
        [data-theme="dark"] .tc-bc,
        .dark .tc-bc       { background: var(--tc-accent); }

        /* ── Layout ── */
        .tc-root {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100vh;
          cursor: none;
          overflow: hidden;
          position: relative;
        }
        @media (max-width: 860px) {
          .tc-root { grid-template-columns: 1fr; cursor: auto; }
          .tc-xhair { display: none !important; }
          .tc-bc    { min-height: 52vh; }
        }

        /* ── Crosshair ── */
        .tc-xhair {
          position: absolute; pointer-events: none; z-index: 9999;
          top: 0; left: 0; transform: translate(-50%, -50%);
        }
        .tc-arm {
          position: absolute;
          background: color-mix(in srgb, var(--tc-accent) 85%, transparent);
        }
        .tc-arm-l { width: 11px; height: 1.5px; top: -.75px; right: 5px; }
        .tc-arm-r { width: 11px; height: 1.5px; top: -.75px; left: 5px;  }
        .tc-arm-t { height: 11px; width: 1.5px; left: -.75px; bottom: 5px; }
        .tc-arm-b { height: 11px; width: 1.5px; left: -.75px; top: 5px;  }
        .tc-xco {
          position: absolute; left: 13px; bottom: 3px;
          font-family: var(--tc-mono); font-size: 9px;
          color: #4488FF; white-space: nowrap; letter-spacing: .05em;
        }

        /* ── Console (left) ── */
        .tc-console {
          background: var(--tc-bg);
          display: flex; flex-direction: column;
          padding: clamp(1.5rem, 3.5vw, 3rem);
          position: relative; overflow: hidden;
          border-right: 1px solid var(--tc-border);
        }
        /* Dot-grid on dark */
        .tc-console::after {
          content: ''; position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background-image: radial-gradient(rgba(255,255,255,.025) 1px, transparent 1px);
          background-size: 28px 28px;
        }
        /* Magenta scan line */
        .tc-scan {
          position: absolute; top: -2px; left: 0; width: 100%; height: 2px;
          background: #FF2B6D; opacity: .4; box-shadow: 0 0 12px rgba(255,43,109, 0.8);
          animation: tc-scan 16s linear infinite; pointer-events: none; z-index: 1;
        }
        @keyframes tc-scan { from { transform: translateY(0); } to { transform: translateY(100vh); } }
        @media (prefers-reduced-motion: reduce) { .tc-scan { display: none; } }

        /* Console header */
        .tc-ch { position: relative; z-index: 2; margin-bottom: 1.4rem; }
        .tc-cb {
          display: flex; align-items: center; gap: 7px;
          padding: 9px 12px;
          background: color-mix(in srgb, var(--tc-bg) 80%, var(--tc-raised));
          border: 1px solid var(--tc-border);
          border-radius: 6px 6px 0 0;
        }
        .tc-cdot { width: 10px; height: 10px; border-radius: 50%; }
        .tc-ctitle {
          font-family: var(--tc-mono); font-size: 10px; color: var(--tc-dim);
          letter-spacing: .07em; margin-left: 5px; flex: 1;
        }
        .tc-clock { font-family: var(--tc-mono); font-size: 10px; color: var(--tc-accent); letter-spacing: .1em; }
        .tc-clog {
          background: color-mix(in srgb, var(--tc-bg) 70%, var(--tc-surf));
          border: 1px solid var(--tc-border); border-top: none;
          border-radius: 0 0 6px 6px;
          padding: 10px 12px; font-family: var(--tc-mono); font-size: 11px; min-height: 76px;
        }
        .tc-cline { line-height: 1.9; color: var(--tc-dim); }
        .tc-cprompt { color: var(--tc-accent); font-weight: 700; margin-right: 5px; }
        .tc-cok  { color: #50FA7B; font-weight: 700; }
        .tc-crdy { color: var(--tc-accent); font-weight: 700; }
        .tc-blink {
          display: inline-block; color: var(--tc-accent); font-weight: 700; margin-left: 1px;
          animation: tc-blink .7s step-end infinite;
        }
        @keyframes tc-blink { 0%,100%{opacity:1} 50%{opacity:0} }

        /* Form */
        .tc-form { position: relative; z-index: 2; flex: 1; display: flex; flex-direction: column; }
        .tc-field { margin-bottom: 1rem; }
        .tc-flabel {
          display: flex; align-items: center; gap: 5px; margin-bottom: 3px;
          font-family: var(--tc-mono); font-size: 10px; letter-spacing: .18em;
          text-transform: uppercase; color: var(--tc-dim);
        }
        .tc-fprompt { color: var(--tc-accent); font-weight: 700; }
        .tc-fn { transition: color .18s; }
        .tc-fn-on { color: var(--tc-ink); }
        .tc-fcount { margin-left: auto; font-size: 9px; }
        .tc-input {
          width: 100%; background: transparent; border: none;
          border-bottom: 1px solid var(--tc-border);
          outline: none; padding: 7px 0;
          font-family: var(--tc-mono);
          font-size: clamp(.8rem, 1.7vw, .95rem);
          color: var(--tc-ink); caret-color: var(--tc-accent);
          transition: border-color .2s, box-shadow .2s; resize: none; line-height: 1.6;
        }
        .tc-input:focus { 
          border-bottom-color: var(--tc-accent); 
          box-shadow: 0 1px 0 var(--tc-accent);
        }
        .tc-input:focus-visible { outline: 2px solid var(--tc-accent); outline-offset: 4px; border-radius: 2px; }
        .tc-input::placeholder { color: var(--tc-dim); font-style: italic; font-weight: 400; }
        .tc-ta { padding-top: 8px; }
        .tc-fbar {
          height: 1.5px; background: var(--tc-accent);
          transform-origin: left; margin-top: -1px;
        }

        /* Button */
        .tc-btn {
          width: 100%; display: flex; align-items: center; justify-content: center; gap: 10px;
          padding: clamp(.8rem, 1.8vw, 1.1rem) 2rem; border: none;
          font-family: var(--tc-disp); font-size: clamp(1.3rem, 2.6vw, 1.9rem); letter-spacing: .08em;
          cursor: none; position: relative; z-index: 2; margin-top: auto;
          will-change: transform; transition: background .2s, color .2s; overflow: hidden;
        }
        .tc-btn:focus-visible { outline: 2px solid var(--tc-accent); outline-offset: 4px; }
        .tc-btn::after {
          content: ''; position: absolute; inset: 0;
          background: rgba(255,255,255,.07);
          transform: scaleX(0); transform-origin: left; transition: transform .28s;
        }
        .tc-btn:hover::after { transform: scaleX(1); }
        .tc-btn-idle { background: var(--tc-ink); color: var(--tc-accent); }
        .tc-btn-tx   { background: color-mix(in srgb, var(--tc-bg) 80%, var(--tc-surf)); color: var(--tc-accent); border: 1px solid var(--tc-border); }
        .tc-btn-sent { background: #0B2010; color: #50FA7B; border: 1px solid #1A4020; }
        .tc-btn:disabled { opacity: .65; cursor: not-allowed; }
        .tc-brow { display: flex; align-items: center; gap: 10px; }
        .tc-bdot { width: 6px; height: 6px; border-radius: 50%; background: var(--tc-accent); display: inline-block; }
        .tc-bpulse {
          width: 8px; height: 8px; border-radius: 50%; background: #50FA7B;
          animation: tc-pulse 1s ease-in-out infinite; flex-shrink: 0;
        }
        @keyframes tc-pulse { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.5);opacity:.4} }

        /* ── Broadcast (right) ── */
        .tc-bc {
          background: var(--tc-accent);
          display: flex; flex-direction: column; justify-content: space-between;
          padding: clamp(1.5rem, 3.5vw, 3rem);
          position: relative; overflow: hidden;
        }
        /* Blueprint grid */
        .tc-bc::before {
          content: ''; position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(7,8,15,.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(7,8,15,.055) 1px, transparent 1px);
          background-size: 60px 60px; pointer-events: none;
        }
        /* Noise */
        .tc-bc::after {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          opacity: .035; mix-blend-mode: multiply;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }
        .tc-bctag {
          position: relative; z-index: 2; display: flex; align-items: center; gap: 10px;
          font-family: var(--tc-mono); font-size: 10px; font-weight: 700;
          letter-spacing: .2em; color: rgba(7,8,15,.42); text-transform: uppercase;
        }
        .tc-bctag-line { flex: 1; height: 1px; background: rgba(7,8,15,.12); max-width: 44px; }
        .tc-bchead {
          position: relative; z-index: 2; display: flex; flex-direction: column;
          align-items: flex-start; flex: 1; justify-content: center; padding: .8rem 0;
        }
        .tc-bcline {
          display: block; font-family: var(--tc-disp);
          font-size: clamp(3.2rem, 7.5vw, 7.5rem); font-weight: 900;
          line-height: .88; letter-spacing: -.01em; color: #07080F; text-transform: uppercase;
        }
        /* Third word — outline */
        .tc-bcline-out {
          color: transparent;
          -webkit-text-stroke: 2px #07080F;
          letter-spacing: .01em;
        }
        /* Signal rings */
        .tc-rings {
          position: absolute; bottom: 5rem; right: -2rem;
          width: 176px; height: 176px;
          display: flex; align-items: center; justify-content: center;
          pointer-events: none; z-index: 1;
        }
        .tc-ring {
          position: absolute; border-radius: 50%;
          border: 1px solid rgba(7,8,15,.15);
          animation: tc-ring 3.2s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
          animation-delay: calc(var(--ri) * .65s);
          opacity: 0;
        }
        .tc-ring:nth-child(1) { width:  36px; height:  36px; }
        .tc-ring:nth-child(2) { width:  80px; height:  80px; }
        .tc-ring:nth-child(3) { width: 128px; height: 128px; }
        .tc-ring:nth-child(4) { width: 176px; height: 176px; }
        @keyframes tc-ring { 0%{transform:scale(.2);opacity:.55} 100%{transform:scale(1);opacity:0} }
        @media (prefers-reduced-motion: reduce) { .tc-ring { animation: none; opacity: .1; } }
        .tc-ring-core {
          position: absolute; width: 8px; height: 8px; border-radius: 50%;
          background: rgba(7,8,15,.32);
        }
        .tc-bcstatus {
          position: relative; z-index: 2; display: flex; align-items: center; gap: 8px;
          font-family: var(--tc-mono); font-size: 10px; letter-spacing: .1em;
          text-transform: uppercase; color: rgba(7,8,15,.45);
        }
        .tc-bcstatus-dot {
          width: 6px; height: 6px; border-radius: 50%; background: rgba(7,8,15,.4);
          animation: tc-pulse 2.2s ease-in-out infinite; flex-shrink: 0;
        }
        .tc-bcsep { opacity: .3; }
        .tc-bccoord {
          position: absolute; bottom: clamp(1.5rem, 3.5vw, 3rem); left: clamp(1.5rem, 3.5vw, 3rem);
          display: flex; flex-direction: column; gap: 2px;
          font-family: var(--tc-mono); font-size: 9px;
          color: rgba(7,8,15,.18); letter-spacing: .12em; z-index: 2;
        }
        @media (max-width: 860px) {
          .tc-bc { padding: 2.5rem 1.5rem 2rem; }
          .tc-console { padding: 1.5rem; border-right: none; border-bottom: 1px solid var(--tc-border); }
          .tc-rings { display: none; }
          .tc-btn { cursor: pointer; font-size: clamp(1.2rem, 5vw, 1.6rem); }
          .tc-bcline { font-size: clamp(2.8rem, 10vw, 5rem); }
        }
      `}</style>

      {/* Crosshair */}
      <div className="tc-xhair" style={{ left: coords.x, top: coords.y }} aria-hidden="true">
        <div className="tc-arm tc-arm-l" />
        <div className="tc-arm tc-arm-r" />
        <div className="tc-arm tc-arm-t" />
        <div className="tc-arm tc-arm-b" />
        <div className="tc-xco">
          X:{String(coords.x).padStart(4, '0')} Y:{String(coords.y).padStart(4, '0')}
        </div>
      </div>

      {/* Grid */}
      <div className="tc-root" onMouseMove={onMove}>
        {/* LEFT — dark console */}
        <div className="tc-console">
          <div className="tc-scan" aria-hidden="true" />
          <ConsoleHeader />
          <motion.form
            className="tc-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <TermField
              label="IDENT / NAME"
              value={name}
              onChange={setName}
              placeholder="your name"
              idx={0}
            />
            <TermField
              label="ADDR / EMAIL"
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="you@email.com"
              idx={1}
            />
            <TermField
              label="MSG / PROJECT"
              type="textarea"
              value={msg}
              onChange={setMsg}
              placeholder="describe what you want to build..."
              maxLen={280}
              idx={2}
            />
            <TransmitBtn status={status} />
          </motion.form>
        </div>

        {/* RIGHT — lime broadcast */}
        <Broadcast scramble={status === 'tx'} />
      </div>
    </>
  );
}
