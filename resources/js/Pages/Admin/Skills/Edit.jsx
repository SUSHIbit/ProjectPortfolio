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

export default function EditSkill({ skill }) {
    const { data, setData, put, processing, errors } = useForm({
        name: skill.name || "",
        order: skill.order || 0,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("admin.skills.update", skill.id));
    };

    return (
        <AdminLayout>
            <Head title="Edit Skill" />

            <div className="mb-6">
                <h1 className="text-2xl font-bold mb-2">Edit Skill</h1>
                <p className="text-zinc-600 dark:text-zinc-400">
                    Update the skill details.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Skill Details</CardTitle>
                    <CardDescription>
                        Modify the name or display order of the skill
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="name">Skill Name</Label>
                                <Input
                                    id="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    className="mt-1"
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.name}
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
                        </div>

                        <div className="flex space-x-2">
                            <Button type="submit" disabled={processing}>
                                Update Skill
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
