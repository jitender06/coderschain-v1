export default function ServiceProcess({ process }: { process: Array<{ step: string; description: string }> }) {
    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        Our Development Process
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mt-4">
                        Transparent, collaborative, and efficient workflow
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {process.map((step, index) => (
                        <div key={index} className="flex items-start mb-8">
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-6">
                                {index + 1}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    {step.step}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-lg">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}