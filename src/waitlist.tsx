import React from 'react';
import { ArrowUpRight, Mail, X } from 'lucide-react';
import { Logo } from './logo';
import './waitlist.css';

export function WaitlistModal({open,onClose}:{open:boolean;onClose:()=>void}) {
  const dialog=React.useRef<HTMLDialogElement>(null);
  React.useEffect(()=>{
    const element=dialog.current;
    if(!open || !element)return;
    const previous=document.activeElement as HTMLElement | null;
    const overflow=document.body.style.overflow;
    element.showModal();
    document.body.style.overflow='hidden';
    return()=>{element.close();document.body.style.overflow=overflow;previous?.focus()};
  },[open]);
  return <dialog ref={dialog} className="waitlist-dialog" aria-labelledby="waitlist-title" aria-describedby="waitlist-description" onCancel={event=>{event.preventDefault();onClose()}} onClick={event=>{if(event.target===event.currentTarget){const rect=event.currentTarget.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)onClose()}}}>
    <button type="button" className="waitlist-close" aria-label="Close waitlist" onClick={onClose}><X size={20}/></button>
    <div className="waitlist-mark"><Logo linked={false}/></div>
    <span className="label">Something simpler is coming</span>
    <h2 id="waitlist-title">Your money.<br/>A new beginning.</h2>
    <p id="waitlist-description">Be among the first to experience Linmoni. Simple money movement, built around you.</p>
    <div className="waitlist-form">
      <label htmlFor="waitlist-email">Email address</label>
      <div className="waitlist-input"><Mail size={18}/><input id="waitlist-email" type="email" autoComplete="email" placeholder="you@example.com" aria-describedby="waitlist-availability" disabled /></div>
      <button type="button" className="btn" disabled>Join the waitlist <ArrowUpRight size={18}/></button>
      <p id="waitlist-availability" className="waitlist-note">Waitlist registration opens soon. Please check back.</p>
    </div>
  </dialog>;
}
