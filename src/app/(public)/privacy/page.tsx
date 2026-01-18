import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata = {
    title: 'Privacy Policy - CodersChain',
    description: 'Learn about how CodersChain collects, uses, and protects your personal information and data.',
}

function PrivacyPolicy() {
    return (
        <div className="container-web bg-background">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Last updated: {new Date().toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </p>
                </div>

                <Card>
                    <CardContent className="pt-6">
                        <div className="prose prose-gray dark:prose-invert max-w-none">
                            {/* Introduction */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                    1. Introduction
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    Welcome to CodersChain. We are committed to protecting your privacy and ensuring
                                    the security of your personal information. This Privacy Policy explains how we
                                    collect, use, disclose, and safeguard your information when you visit our website.
                                </p>
                            </section>

                            {/* Information Collection */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                    2. Information We Collect
                                </h2>
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                                    Personal Information
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                                    <li>Name and contact information</li>
                                    <li>Email address</li>
                                    <li>Professional information (if provided)</li>
                                    <li>Communication preferences</li>
                                </ul>

                                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                                    Automatic Information
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                                    <li>IP address and browser type</li>
                                    <li>Device information</li>
                                    <li>Usage data and analytics</li>
                                    <li>Cookies and similar technologies</li>
                                </ul>
                            </section>

                            {/* Use of Information */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                    3. How We Use Your Information
                                </h2>
                                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                                    <li>To provide and maintain our services</li>
                                    <li>To improve user experience</li>
                                    <li>To communicate with you about updates</li>
                                    <li>To provide customer support</li>
                                    <li>To analyze website performance</li>
                                    <li>To comply with legal obligations</li>
                                </ul>
                            </section>

                            {/* Data Sharing */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                    4. Data Sharing and Disclosure
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    We do not sell, trade, or otherwise transfer your personal information to third
                                    parties without your consent, except in the following circumstances:
                                </p>
                                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                                    <li>With service providers who assist our operations</li>
                                    <li>To comply with legal requirements</li>
                                    <li>To protect our rights and safety</li>
                                    <li>In connection with business transfers</li>
                                </ul>
                            </section>

                            {/* Cookies */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                    5. Cookies and Tracking
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    We use cookies and similar tracking technologies to track activity on our website
                                    and hold certain information. You can instruct your browser to refuse all cookies
                                    or to indicate when a cookie is being sent.
                                </p>
                            </section>

                            {/* Data Security */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                    6. Data Security
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    We implement appropriate security measures to protect your personal information.
                                    However, no method of transmission over the Internet is 100% secure, and we cannot
                                    guarantee absolute security.
                                </p>
                            </section>

                            {/* Your Rights */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                    7. Your Rights
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    You have the right to:
                                </p>
                                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                                    <li>Access your personal information</li>
                                    <li>Correct inaccurate data</li>
                                    <li>Request deletion of your data</li>
                                    <li>Object to processing of your data</li>
                                    <li>Data portability</li>
                                    <li>Withdraw consent</li>
                                </ul>
                            </section>

                            {/* Third-Party Links */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                    8. Third-Party Links
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    Our website may contain links to other sites. We are not responsible for the
                                    content or privacy practices of these external sites.
                                </p>
                            </section>

                            {/* Children's Privacy */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                    9. Children's Privacy
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    Our services are not directed to individuals under the age of 13. We do not
                                    knowingly collect personal information from children under 13.
                                </p>
                            </section>

                            {/* Changes to Policy */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                    10. Changes to This Policy
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    We may update this Privacy Policy from time to time. We will notify you of any
                                    changes by posting the new Privacy Policy on this page and updating the
                                    "Last updated" date.
                                </p>
                            </section>

                            {/* Contact */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                    11. Contact Us
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    If you have any questions about this Privacy Policy, please contact us at:
                                </p>
                                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                    <p className="text-gray-700 dark:text-gray-300">
                                        <strong>Email:</strong> privacy@coderschain.com<br />
                                        <strong>Website:</strong> www.coderschain.com<br />
                                        <strong>Address:</strong> Rajasthan, India
                                    </p>
                                </div>
                            </section>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default PrivacyPolicy