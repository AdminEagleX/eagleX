"use client";

import { useEffect } from "react";

function isEditableTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;

  const editable = target.closest(
    "input, textarea, [contenteditable='true'], [contenteditable=''], [data-allow-copy]"
  );

  if (!editable) return false;

  if (editable instanceof HTMLInputElement) {
    const type = editable.type?.toLowerCase();
    return !(
      type === "button" ||
      type === "submit" ||
      type === "reset" ||
      type === "checkbox" ||
      type === "radio" ||
      type === "range" ||
      type === "color" ||
      type === "file"
    );
  }

  return true;
}

export default function ContentProtection() {
  useEffect(() => {
    const onContextMenu = (e: MouseEvent) => {
      if (isEditableTarget(e.target)) return;
      e.preventDefault();
    };

    const onCopy = (e: ClipboardEvent) => {
      if (isEditableTarget(e.target)) return;
      e.preventDefault();
    };

    const onCut = (e: ClipboardEvent) => {
      if (isEditableTarget(e.target)) return;
      e.preventDefault();
    };

    const onPaste = (e: ClipboardEvent) => {
      if (isEditableTarget(e.target)) return;
      e.preventDefault();
    };

    const onSelectStart = (e: Event) => {
      if (isEditableTarget(e.target)) return;
      e.preventDefault();
    };

    const onDragStart = (e: DragEvent) => {
      if (isEditableTarget(e.target)) return;
      e.preventDefault();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (isEditableTarget(e.target)) return;

      const key = e.key.toLowerCase();
      const ctrlOrCmd = e.ctrlKey || e.metaKey;

      if (!ctrlOrCmd) return;

      if (key === "c" || key === "x" || key === "v" || key === "a") {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("copy", onCopy);
    document.addEventListener("cut", onCut);
    document.addEventListener("paste", onPaste);
    document.addEventListener("selectstart", onSelectStart);
    document.addEventListener("dragstart", onDragStart);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("copy", onCopy);
      document.removeEventListener("cut", onCut);
      document.removeEventListener("paste", onPaste);
      document.removeEventListener("selectstart", onSelectStart);
      document.removeEventListener("dragstart", onDragStart);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return null;
}
