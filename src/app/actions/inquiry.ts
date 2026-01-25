'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function submitInquiry(data: {
    fullName: string;
    email: string;
    subject: string;
    interest: string;
    message: string;
}) {
    const supabase = await createClient()

    const { error } = await supabase
        .from('inquiries')
        .insert([
            {
                full_name: data.fullName,
                email: data.email,
                subject: data.subject,
                interest: data.interest,
                message: data.message,
                status: 'pending'
            }
        ])

    if (error) {
        console.error('Error submitting inquiry:', error)
        return { error: error.message }
    }

    revalidatePath('/admin/inquiry')
    return { success: true }
}

export async function updateInquiryStatus(id: string, status: string) {
    const supabase = await createClient()

    const { error } = await supabase
        .from('inquiries')
        .update({ status })
        .eq('id', id)

    if (error) {
        console.error('Error updating inquiry status:', error)
        return { error: error.message }
    }

    revalidatePath('/admin/inquiry')
    return { success: true }
}
