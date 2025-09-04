import { RolesManagementContent } from "@/components/templates/roles-management-content"
import { RolesTable } from "../organisms/roles-table"
import { DashboardLayout } from "../templates/dashboard-layout"

export function RolesPage() {
  return (
    <DashboardLayout>
      <RolesManagementContent>
        <RolesTable />
      </RolesManagementContent>
    </DashboardLayout>
  )
}
