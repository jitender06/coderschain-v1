export default function ServicePortfolio({ service }: { service: string }) {
    // You can fetch portfolio items based on the service type
    return (
        <section className="py-16 bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        Our Work
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mt-4">
                        See how we've helped businesses succeed
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Portfolio items would go here */}
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl p-6 min-h-[200px] flex items-center justify-center">
                        <p className="text-gray-500 dark:text-gray-400">Portfolio Item</p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl p-6 min-h-[200px] flex items-center justify-center">
                        <p className="text-gray-500 dark:text-gray-400">Portfolio Item</p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl p-6 min-h-[200px] flex items-center justify-center">
                        <p className="text-gray-500 dark:text-gray-400">Portfolio Item</p>
                    </div>
                </div>
            </div>
        </section>
    );
}