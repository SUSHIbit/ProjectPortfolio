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
import { Checkbox } from "@/Components/ui/checkbox";

export default function EditSocialLink({ socialLink }) {
    const { data, setData, put, processing, errors } = useForm({
        platform: socialLink.platform || "",
        icon: socialLink.icon || "",
        url: socialLink.url || "",
        order: socialLink.order || 0,
        active: socialLink.active,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("admin.social-links.update", socialLink.id));
    };

    return (
        <AdminLayout>
            <Head title="Edit Social Link" />

            <div className="mb-6">
                <h1 className="text-2xl font-bold mb-2">Edit Social Link</h1>
                <p className="text-zinc-600 dark:text-zinc-400">
                    Update your social media link details.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Social Link Details</CardTitle>
                    <CardDescription>
                        Modify the details for your social media link
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="platform">Platform</Label>
                                <Input
                                    id="platform"
                                    value={data.platform}
                                    onChange={(e) =>
                                        setData("platform", e.target.value)
                                    }
                                    className="mt-1"
                                />
                                {errors.platform && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.platform}
                                    </p>
                                )}
                            </div>

                            <div>
                                <Label htmlFor="icon">Icon Code</Label>
                                <Input
                                    id="icon"
                                    value={data.icon}
                                    onChange={(e) =>
                                        setData("icon", e.target.value)
                                    }
                                    className="mt-1"
                                />
                                <p className="text-xs text-zinc-500 mt-1">
                                    This will be displayed vertically on the
                                    left side of your website. Use 2-letter
                                    codes (e.g., 'li' for LinkedIn).
                                </p>
                                {errors.icon && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.icon}
                                    </p>
                                )}
                            </div>

                            <div>
                                <Label htmlFor="url">URL</Label>
                                <Input
                                    id="url"
                                    value={data.url}
                                    onChange={(e) =>
                                        setData("url", e.target.value)
                                    }
                                    className="mt-1"
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
                                <p className="text-xs text-zinc-500 mt-1">
                                    Lower numbers appear first.
                                </p>
                                {errors.order && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.order}
                                    </p>
                                )}
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
                                Update Social Link
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
