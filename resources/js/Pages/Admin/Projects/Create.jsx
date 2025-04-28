import React from "react";
import { useForm, Head } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";
import { Checkbox } from "@/Components/ui/checkbox";

export default function CreateProject() {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        type: "",
        description: "",
        url: "",
        is_new: false,
        order: 0,
        active: true,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("admin.projects.store"));
    };

    return (
        <AdminLayout>
            <Head title="Create Project" />

            <div className="mb-6">
                <h1 className="text-2xl font-bold mb-2">Create New Project</h1>
                <p className="text-zinc-600 dark:text-zinc-400">
                    Add a new project to your portfolio.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Project Details</CardTitle>
                    <CardDescription>
                        Enter the information about your project
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="title">Project Title</Label>
                                <Input
                                    id="title"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                    className="mt-1"
                                />
                                {errors.title && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.title}
                                    </p>
                                )}
                            </div>

                            <div>
                                <Label htmlFor="type">Project Type</Label>
                                <Input
                                    id="type"
                                    value={data.type}
                                    onChange={(e) =>
                                        setData("type", e.target.value)
                                    }
                                    className="mt-1"
                                    placeholder="e.g. WEBFLOW DEVELOPMENT"
                                />
                                {errors.type && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.type}
                                    </p>
                                )}
                            </div>

                            <div>
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                    className="mt-1"
                                    rows={4}
                                />
                                {errors.description && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.description}
                                    </p>
                                )}
                            </div>

                            <div>
                                <Label htmlFor="url">Project URL</Label>
                                <Input
                                    id="url"
                                    value={data.url}
                                    onChange={(e) =>
                                        setData("url", e.target.value)
                                    }
                                    className="mt-1"
                                    placeholder="https://example.com"
                                />
                                {errors.url && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.url}
                                    </p>
                                )}
                            </div>

                            <div>
                                <Label htmlFor="order">Display Order</Label>
                                <Input
                                    id="order"
                                    type="number"
                                    value={data.order}
                                    onChange={(e) =>
                                        setData("order", e.target.value)
                                    }
                                    className="mt-1"
                                />
                                {errors.order && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.order}
                                    </p>
                                )}
                            </div>

                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="is_new"
                                    checked={data.is_new}
                                    onCheckedChange={(checked) =>
                                        setData("is_new", checked)
                                    }
                                />
                                <Label htmlFor="is_new">Mark as NEW</Label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="active"
                                    checked={data.active}
                                    onCheckedChange={(checked) =>
                                        setData("active", checked)
                                    }
                                />
                                <Label htmlFor="active">
                                    Active (visible on website)
                                </Label>
                            </div>
                        </div>

                        <div className="flex space-x-2">
                            <Button type="submit" disabled={processing}>
                                Create Project
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => window.history.back()}
                            >
                                Cancel
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </AdminLayout>
    );
}
