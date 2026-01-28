import React from "react";
import { cn } from "@/lib/utils";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    error?: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, error, className, id, ...props }) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
        <div className="w-full">
            <label htmlFor={inputId} className="block text-sm font-medium text-slate-700 mb-2">
                {label}
                {props.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <textarea
                id={inputId}
                className={cn(
                    "w-full px-4 py-3 border rounded-lg transition-all duration-200 resize-none",
                    "focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent",
                    error ? "border-red-500 focus:ring-red-500" : "border-slate-300",
                    className
                )}
                aria-invalid={error ? "true" : "false"}
                aria-describedby={error ? `${inputId}-error` : undefined}
                {...props}
            />
            {error && (
                <p id={`${inputId}-error`} className="mt-1 text-sm text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
};

export default Textarea;
