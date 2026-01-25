import { createClient } from "@/utils/supabase/server"
import { InquiriesTable } from "@/components/admin/inquiries-table"

export default async function InquiryPage() {
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()

    const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user?.id)
        .single()

    const { data: inquiries, error } = await supabase
        .from('inquiries')
        .select('*')
        .order('created_at', { ascending: false })

    console.log({ inquiries, userEmail: user?.email, userRole: profile?.role, count: inquiries?.length })

    if (error) {
        console.error('Error fetching inquiries:', error)
        return (
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <h1 className="text-2xl font-bold">Inquiries</h1>
                <div className="p-4 border border-red-200 bg-red-50 text-red-700 rounded-md">
                    Failed to fetch inquiries: {error.message}
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 overflow-y-auto">
            <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-bold">Inquiries</h1>
                <p className="text-muted-foreground text-sm">View and manage customer inquiries from the contact form.</p>
            </div>

            <div className="flex-1">
                <InquiriesTable data={inquiries || []} />
            </div>
        </div>
    )
}
