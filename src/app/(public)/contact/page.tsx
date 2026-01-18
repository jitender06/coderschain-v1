"use client"
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Clock,
    MessageCircle
} from 'lucide-react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'sonner'
// import { useAddContactMutation } from '@/store/services/contactService'


const contactSchema = Yup.object({
    name: Yup.string()
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name must be less than 50 characters')
        .required('Name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    subject: Yup.string()
        .min(5, 'Subject must be at least 5 characters')
        .max(100, 'Subject must be less than 100 characters')
        .required('Subject is required'),
    service: Yup.string()
        .required('Please select a service type'),
    message: Yup.string()
        .min(10, 'Message must be at least 10 characters')
        .max(1000, 'Message must be less than 1000 characters')
        .required('Message is required'),
})

// Initial values
const initialValues = {
    name: '',
    email: '',
    subject: '',
    service: '',
    message: '',
}

function ContactPage() {
    // const [addContact, { isLoading }] = useAddContactMutation();
    const addContact = (v: any) => ({ unwrap: () => Promise.resolve() });
    const isLoading = false;

    const formik = useFormik({
        initialValues,
        validationSchema: contactSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                const payload = {
                    fullName: values.name,
                    email: values.email,
                    subject: values.subject,
                    interest: values.service,
                    message: values.message,
                };
                await addContact(payload).unwrap();
                resetForm();
                toast.success('Thank you for your message! We will get back to you soon.');
            } catch (error) {
                console.error('Failed to submit form:', error);
                toast.error('Failed to send message. Please try again.');
            }
        },
    })

    return (
        <div className="container-web bg-background">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Get In Touch
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Have questions about our services? Want to start a project?
                        We would love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Contact Information */}
                    <div className="lg:col-span-1 space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <MessageCircle className="h-5 w-5" />
                                    Contact Information
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {/* Email */}
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                                        <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                                        <p className="text-gray-600 dark:text-gray-400">contact@coderschain.com</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">We'll respond within 24 hours</p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                                        <Phone className="h-4 w-4 text-green-600 dark:text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                                        <p className="text-gray-600 dark:text-gray-400">+91 XXXXX XXXXX</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Mon-Fri from 9am to 6pm</p>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                                        <MapPin className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white">Office</h3>
                                        <p className="text-gray-600 dark:text-gray-400">Rajasthan, India</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Remote team across India</p>
                                    </div>
                                </div>

                                {/* Business Hours */}
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg">
                                        <Clock className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white">Business Hours</h3>
                                        <p className="text-gray-600 dark:text-gray-400">Monday - Friday</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">9:00 AM - 6:00 PM IST</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Why Choose Us */}
                        <Card className="bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-800 dark:to-purple-900">
                            <CardHeader>
                                <CardTitle className="text-lg">Why Choose CodersChain?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                                        Fast response time
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                                        Expert development team
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                                        Startup-friendly approach
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                                        Quality guaranteed work
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                                        Ongoing support & maintenance
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Send us a Message</CardTitle>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Fill out the form below and we'll get back to you as soon as possible.
                                </p>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={formik.handleSubmit} className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {/* Name Field */}
                                        <div className="space-y-2">
                                            <Label htmlFor="name" className="text-sm font-medium">
                                                Full Name *
                                            </Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                type="text"
                                                placeholder="Enter your full name"
                                                value={formik.values.name}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                className={`w-full ${formik.touched.name && formik.errors.name
                                                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                                    : ''
                                                    }`}
                                            />
                                            {formik.touched.name && formik.errors.name && (
                                                <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
                                            )}
                                        </div>

                                        {/* Email Field */}
                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-sm font-medium">
                                                Email Address *
                                            </Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="Enter your email address"
                                                value={formik.values.email}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                className={`w-full ${formik.touched.email && formik.errors.email
                                                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                                    : ''
                                                    }`}
                                            />
                                            {formik.touched.email && formik.errors.email && (
                                                <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Subject Field */}
                                    <div className="space-y-2">
                                        <Label htmlFor="subject" className="text-sm font-medium">
                                            Subject *
                                        </Label>
                                        <Input
                                            id="subject"
                                            name="subject"
                                            type="text"
                                            placeholder="What is this regarding?"
                                            value={formik.values.subject}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className={`w-full ${formik.touched.subject && formik.errors.subject
                                                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                                : ''
                                                }`}
                                        />
                                        {formik.touched.subject && formik.errors.subject && (
                                            <div className="text-red-500 text-sm mt-1">{formik.errors.subject}</div>
                                        )}
                                    </div>

                                    {/* Service Type */}
                                    <div className="space-y-2">
                                        <Label htmlFor="service" className="text-sm font-medium">
                                            Service Interested In *
                                        </Label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formik.values.service}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className={`w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${formik.touched.service && formik.errors.service
                                                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                                : ''
                                                }`}
                                        >
                                            <option value="">Select a service</option>
                                            <option value="web-development">Web Development</option>
                                            <option value="mentorship">Mentorship Program</option>
                                            <option value="project-help">Project Assistance</option>
                                            <option value="consultation">Technical Consultation</option>
                                            <option value="other">Other</option>
                                        </select>
                                        {formik.touched.service && formik.errors.service && (
                                            <div className="text-red-500 text-sm mt-1">{formik.errors.service}</div>
                                        )}
                                    </div>

                                    {/* Message Field */}
                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="text-sm font-medium">
                                            Message *
                                        </Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Tell us about your project, questions, or how we can help you..."
                                            rows={6}
                                            value={formik.values.message}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className={`w-full resize-vertical ${formik.touched.message && formik.errors.message
                                                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                                : ''
                                                }`}
                                        />
                                        {formik.touched.message && formik.errors.message && (
                                            <div className="text-red-500 text-sm mt-1">{formik.errors.message}</div>
                                        )}
                                        <div className="text-xs text-gray-500 dark:text-gray-400 text-right">
                                            {formik.values.message.length}/1000 characters
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <Button
                                        type="submit"
                                        className="w-full"
                                        size="lg"
                                        disabled={formik.isSubmitting || !formik.isValid || isLoading}
                                    >
                                        <Send className="h-4 w-4 mr-2" />
                                        {formik.isSubmitting ? 'Sending...' : 'Send Message'}
                                    </Button>

                                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                                        By submitting this form, you agree to our Privacy Policy and Terms of Service.
                                    </p>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Additional Info */}
                        <div className="grid md:grid-cols-2 gap-4 mt-6">
                            <Card className="bg-gray-50 dark:bg-gray-800">
                                <CardContent className="pt-6">
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                        For Quick Inquiries
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Prefer a quicker response? Email us directly at contact@coderschain.com for urgent matters.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-gray-50 dark:bg-gray-800">
                                <CardContent className="pt-6">
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                        Project Discussion
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Have a project in mind? Include as many details as possible for a accurate quote.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <Card className="mt-12">
                    <CardHeader className="text-center">
                        <CardTitle>Frequently Asked Questions</CardTitle>
                        <p className="text-gray-600 dark:text-gray-400">
                            Quick answers to common questions
                        </p>
                    </CardHeader>
                    <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                    How soon will you respond?
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    We typically respond within 2-4 hours during business days. Maximum response time is 24 hours.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                    Do you offer free consultations?
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Yes! We offer free 30-minute initial consultations for new projects and mentorship guidance.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                    What information should I include?
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Please include your project requirements, timeline, budget, and any specific technologies you prefer.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                    Do you work with startups?
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Absolutely! We specialize in working with startups and offer flexible engagement models.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default ContactPage