import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { memo } from "react";

export default function Home() {
  type CardProps = {
    title: string;
    buttonText: string;
  };
  const CardCustomize = memo(({ title, buttonText }: CardProps) => {
    return (
      <Card>
        <div className="flex justify-between items-center p-4">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <div className="h-2 bg-gray-200 rounded w-48 mt-2"></div>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">{buttonText}</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Pending Supplier Info</DialogTitle>
              </DialogHeader>
              <div>
                <p className="text-sm">Supplier Name: ABC Corporation</p>
                <p className="text-sm">Status: Pending Approval</p>
                <Button className="mt-2">Approve</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </Card>
    )
  })
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-4 border-r hidden md:block">
        <h2 className="text-xl font-semibold mb-6">Admin Dashboard</h2>
        <nav className="space-y-4">
          <a href="#" className="block text-sm text-gray-800 hover:font-semibold">Dashboard</a>
          <a href="#" className="block text-sm text-gray-800 hover:font-semibold">Pending Suppliers</a>
          <a href="#" className="block text-sm text-gray-800 hover:font-semibold">Pending Events</a>
          <a href="#" className="block text-sm text-gray-800 hover:font-semibold">Moderate Posts</a>
          <a href="#" className="block text-sm text-gray-800 hover:font-semibold">User Management</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <b className="text-2xl font-bold text-center">8</b>
            </CardHeader>
            <CardDescription>
              <CardTitle className="text-center">Submissions</CardTitle>
            </CardDescription>
          </Card>

          <Card>
            <CardHeader>
              <b className="text-2xl font-bold text-center">150</b>
            </CardHeader>
            <CardDescription>
              <CardTitle className="text-center">Total Users</CardTitle>
            </CardDescription>
          </Card>

          <Card>
            <CardHeader>
              <b className="text-2xl font-bold text-center">24</b>
            </CardHeader>
            <CardDescription>
              <CardTitle className="text-center">Active Posts</CardTitle>
            </CardDescription>
          </Card>

          <Card>
            <CardHeader>
              <b className="text-2xl font-bold text-center">2</b>
            </CardHeader>
            <CardDescription>
              <CardTitle className="text-center">Reported Content</CardTitle>
            </CardDescription>
          </Card>
        </section>

        <section className="grid grid-cols-1 auto-rows-min md:grid-cols-2 gap-4 mt-4">
          <div>
            <h2 className="text-2xl font-bold mb-4">Pending Suppliers</h2>
            <div className="grid grid-cols-1 gap-4">
              <CardCustomize
                title="Supplier Name"
                buttonText="Approve" />
              <CardCustomize
                title="Supplier Name"
                buttonText="Approve" />
            </div>
          </div>

          {/* Pending Events Column */}
          <div className="grid auto-rows-min">
            <h2 className="text-2xl font-bold mb-4">Pending Events</h2>
            <div className="grid grid-cols-1 gap-4">
              <CardCustomize
                title="Event Name"
                buttonText="Approve" />
              <CardCustomize
                title="Event Name"
                buttonText="Reject" />
            </div>
          </div>
        </section>

        {/* Reported Posts */}
        <section className="grid auto-rows-min mt-4">
          <h2 className="text-2xl font-bold mb-4">Reported Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CardCustomize
              title="Post Title"
              buttonText="View" />
            <CardCustomize
              title="Post Title"
              buttonText="View" />
            <CardCustomize
              title="Post Title"
              buttonText="View" />
            <CardCustomize
              title="Post Title"
              buttonText="View" />
          </div>
        </section>
      </main>




      {/* Button that triggers a modal */}
      {/* <div className="col-span-1 md:col-span-2 lg:col-span-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-4 w-full">Open Details</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Pending Supplier Info</DialogTitle>
              </DialogHeader>
              <div>
                <p className="text-sm">Supplier Name: ABC Corporation</p>
                <p className="text-sm">Status: Pending Approval</p>
                <Button className="mt-2">Approve</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div> */}
    </div>
  );
}
