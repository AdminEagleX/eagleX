"use client";

import React, { useState, FormEvent } from "react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import contactContent from "@/content/contact.json";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

interface FormErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    message?: string;
}

const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required";
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }
        if (!formData.message.trim()) {
            newErrors.message = "Project details are required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus("success");
                setFormData({ firstName: "", lastName: "", email: "", message: "" });
            } else {
                setSubmitStatus("error");
            }
        } catch {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    return (
        <div className="p-8 md:p-10 rounded-3xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm">
            {submitStatus === "success" ? (
                <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-500/15 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-medium text-white mb-3">Message Sent</h3>
                    <p className="text-slate-400 leading-relaxed">{contactContent.form.successMessage}</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                            label="First Name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Jane"
                            error={errors.firstName}
                            required
                        />
                        <Input
                            label="Last Name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Doe"
                            error={errors.lastName}
                            required
                        />
                    </div>

                    <Input
                        label="Work Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        error={errors.email}
                        required
                    />

                    {/* Honeypot field - hidden from users, catches bots */}
                    <input
                        type="text"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                        style={{
                            position: 'absolute',
                            left: '-9999px',
                            width: '1px',
                            height: '1px',
                        }}
                        aria-hidden="true"
                    />

                    <Textarea
                        label="Project Details"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        rows={5}
                        error={errors.message}
                        required
                    />

                    {submitStatus === "error" && (
                        <p className="text-red-400 text-sm">{contactContent.form.errorMessage}</p>
                    )}

                    <Button type="submit" variant="primary" className="w-full" size="lg" isLoading={isSubmitting}>
                        {contactContent.form.submitLabel}
                    </Button>
                </form>
            )}
        </div>
    );
};

export default ContactForm;
