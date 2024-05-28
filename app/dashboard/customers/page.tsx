import { fetchFilteredCustomers } from "@/app/lib/data"
import { Customer, FormattedCustomersTable } from "@/app/lib/definitions"
import Table from "@/app/ui/customers/table"
import { lusitana } from "@/app/ui/fonts"
import Pagination from "@/app/ui/invoices/pagination"
import Search from "@/app/ui/search"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Customers',
}

export default async function CustomersPage (
    {searchParams}:{
        searchParams?: {
            query?: string;
        }; 
    })
    {
    const query = searchParams?.query || '';
 
    // not in tutorial, implement Customers table with search.
    return (
        <div className="w-full">
            <Table query={query}></Table>
        </div>
    )
}

