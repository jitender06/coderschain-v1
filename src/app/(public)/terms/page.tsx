import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata = {
    title: 'Terms of Service - CodersChain',
    description: 'Terms and conditions governing the use of CodersChain services, websites, and products.',
}

function TermsOfService() {
    return (
        <div className="container-web bg-background">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Terms of Service
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Last updated: {new Date().toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
                        Please read these terms carefully before using our services. By accessing or using CodersChain,
                        you agree to be bound by these terms.
                    </p>
                </div>

                <Card>
                    <CardContent className="pt-6">
                        <div className="prose prose-gray dark:prose-invert max-w-none">

                            {/* Agreement Section */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                    1. Agreement to Terms
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    By accessing and using CodersChain (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you accept and agree to be bound by the terms and provision of this agreement.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    If you do not agree to abide by these terms, please do not use this site or our services.
                                </p>
                            </section>

                            {/* Services Description */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                    2. Description of Services
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    CodersChain provides:
                                </p>
                                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                                    <li>Technical blogs and educational content</li>
                                    <li>Mentorship and guidance programs</li>
                                    <li>Project development services</li>
                                    <li>Web development and software solutions</li>
                                    <li>Code examples and tutorials</li>
                                    <li>Community support and resources</li>
                                </ul>
                                <p className="text-gray-700 dark:text-gray-300">
                                    We reserve the right to modify, suspend, or discontinue any service at any time without notice.
                                </p>
                            </section>

                            {/* User Accounts */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                    3. User Accounts
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    When you create an account with us, you must provide accurate and complete information. You are responsible for:
                                </p>
                                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                                    <li>Maintaining the confidentiality of your account and password</li>
                                    <li>All activities that occur under your account</li>
                                    <li>Notifying us immediately of any unauthorized use</li>
                                    <li>Ensuring you logout from your account at the end of each session</li>
                                </ul>
                                <p className="text-gray-700 dark:text-gray-300">
                                    We reserve the right to remove, reclaim, or change a username you select if we determine it is inappropriate, obscene, or otherwise objectionable.
                                </p>
                            </section>

                            {/* Intellectual Property */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                    4. Intellectual Property Rights
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    Unless otherwise indicated, the Content on our platform, including but not limited to:
                                </p>
                                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                                    <li>Source code, tutorials, and examples</li>
                                    <li>Blog posts, articles, and documentation</li>
                                    <li>Logos, trademarks, and brand elements</li>
                                    <li>Course materials and educational content</li>
                                </ul>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    is the property of CodersChain and protected by copyright and trademark laws.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    You may access and use the content for personal, non-commercial purposes. You may not reproduce, distribute, modify, or create derivative works without our explicit permission.
                                </p>
                            </section>

                            {/* User Content */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                    5. User-Generated Content
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    You retain ownership of any content you post, upload, or share on our platform. However, by posting content, you grant us a worldwide, non-exclusive, royalty-free license to use, modify, and display such content in connection with our services.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    You agree not to post content that:
                                </p>
                                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                                    <li>Is illegal, offensive, or harmful</li>
                                    <li>Infringes on any third-party rights</li>
                                    <li>Contains malware or malicious code</li>
                                    <li>Is spam or promotional content</li>
                                    <li>Contains personal information of others</li>
                                </ul>
                                <p className="text-gray-700 dark:text-gray-300">
                                    We reserve the right to remove any content that violates these terms.
                                </p>
                            </section>

                            {/* Prohibited Activities */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                    6. Prohibited Activities
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    You may not access or use our services for any purpose other than that for which we make them available. Prohibited activities include:
                                </p>
                                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                                    <li>Systematically retrieving data to create a collection</li>
                                    <li>Tricking, defrauding, or misleading us and other users</li>
                                    <li>Circumventing, disabling, or interfering with security features</li>
                                    <li>Using any information to harass, abuse, or harm others</li>
                                    <li>Using our services for illegal or unauthorized purposes</li>
                                    <li>Uploading viruses or malicious code</li>
                                    <li>Engaging in unauthorized framing or linking</li>
                                    <li>Interfering with the proper functioning of our services</li>
                                </ul>
                            </section>

                            {/* Service Fees and Payments */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                    7. Service Fees and Payments
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    Some services may require payment. By selecting a paid service, you agree to pay the specified fees. We use third-party payment processors and do not store your payment information.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    <strong>Refund Policy:</strong> Refund eligibility varies by service. Please refer to specific service descriptions for refund policies.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    We reserve the right to change our pricing with 30 days notice. Continued use after price changes constitutes your agreement to pay the modified amount.
                                </p>
                            </section>

                            {/* Third-Party Services */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                    8. Third-Party Services and Content
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    Our services may contain links to third-party websites or services that are not owned or controlled by CodersChain.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party sites or services. You acknowledge and agree that we shall not be responsible for any damage or loss caused by such third-party services.
                                </p>
                            </section>

                            {/* Disclaimer of Warranties */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                    9. Disclaimer of Warranties
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    OUR SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO:
                                </p>
                                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                                    <li>IMPLIED WARRANTIES OF MERCHANTABILITY</li>
                                    <li>FITNESS FOR A PARTICULAR PURPOSE</li>
                                    <li>NON-INFRINGEMENT</li>
                                    <li>COURSE OF PERFORMANCE</li>
                                </ul>
                                <p className="text-gray-700 dark:text-gray-300">
                                    We do not warrant that the services will be uninterrupted, error-free, or completely secure.
                                </p>
                            </section>

                            {/* Limitation of Liability */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                    10. Limitation of Liability
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT SHALL CODERSCHAIN, ITS DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION:
                                </p>
                                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                                    <li>LOSS OF PROFITS</li>
                                    <li>LOSS OF DATA</li>
                                    <li>BUSINESS INTERRUPTION</li>
                                    <li>PERSONAL INJURY</li>
                                    <li>PROPERTY DAMAGE</li>
                                </ul>
                                <p className="text-gray-700 dark:text-gray-300">
                                    ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OUR SERVICES.
                                </p>
                            </section>

                            {/* Indemnification */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                    11. Indemnification
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    You agree to defend, indemnify, and hold harmless CodersChain and its affiliates from and against any claims, damages, costs, and expenses, including attorneys&apos; fees, arising from or related to your use of our services or violation of these Terms.
                                </p>
                            </section>

                            {/* Termination */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                    12. Termination
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason, including without limitation if you breach these Terms.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Upon termination, your right to use our services will cease immediately. All provisions of these Terms which by their nature should survive termination shall survive.
                                </p>
                            </section>

                            {/* Governing Law */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                    13. Governing Law
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Any disputes shall be subject to the exclusive jurisdiction of the courts located in Rajasthan, India.
                                </p>
                            </section>

                            {/* Changes to Terms */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                    14. Changes to Terms
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days&apos; notice prior to any new terms taking effect.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    By continuing to access or use our services after those revisions become effective, you agree to be bound by the revised terms.
                                </p>
                            </section>

                            {/* Contact Information */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                    15. Contact Information
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    If you have any questions about these Terms, please contact us at:
                                </p>
                                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                    <p className="text-gray-700 dark:text-gray-300">
                                        <strong>Email:</strong> legal@coderschain.com<br />
                                        <strong>Website:</strong> www.coderschain.com<br />
                                        <strong>Address:</strong> Rajasthan, India
                                    </p>
                                </div>
                            </section>

                        </div>
                    </CardContent>
                </Card>

                {/* Acceptance Notice */}
                <Card className="mt-8 border-l-4 border-l-blue-500">
                    <CardContent className="pt-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Acceptance of Terms
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default TermsOfService