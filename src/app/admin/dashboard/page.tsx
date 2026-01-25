import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { IconUsers, IconUserStar, IconFileDescription, IconArrowUpRight } from "@tabler/icons-react"

export default function DashboardPage() {
    const stats = [
        {
            title: "Total Users",
            value: "1,234",
            change: "+12%",
            icon: IconUsers,
        },
        {
            title: "Active Inquiries",
            value: "45",
            change: "+2%",
            icon: IconUserStar,
        },
        {
            title: "Total Projects",
            value: "12",
            change: "+5%",
            icon: IconFileDescription,
        },
        {
            title: "Revenue",
            value: "$12,345",
            change: "+15%",
            icon: IconArrowUpRight,
        },
    ]

    return (
        <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, i) => (
                    <Card key={i}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                {stat.title}
                            </CardTitle>
                            <stat.icon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <p className="text-xs text-muted-foreground">
                                <span className="text-green-500 font-medium">{stat.change}</span> from last month
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <div className="h-[200px] w-full flex items-center justify-center text-muted-foreground">
                            Chart Placeholder
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Recent Inquiries</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-8">
                            {/* Mock recent items */}
                            {[1, 2, 3].map(i => (
                                <div key={i} className="flex items-center">
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none">John Doe</p>
                                        <p className="text-xs text-muted-foreground">john@example.com</p>
                                    </div>
                                    <div className="ml-auto font-medium">+$1,999.00</div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
