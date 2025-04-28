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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";

export default function CreateSocialLink() {
    const { data, setData, post, processing, errors } = useForm({
        platform: "",
        icon: "",
        url: "",
        order: 0,
        active: true,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("admin.social-links.store"));
    };

    // Common social platform icons
    const platformOptions = [
        { value: "LinkedIn", icon: "li" },
        { value: "Twitter", icon: "tw" },
        { value: "Dribbble", icon: "dr" },
        { value: "GitHub", icon: "gh" },
        { value: "Instagram", icon: "ig" },
        { value: "Facebook", icon: "fb" },
        { value: "YouTube", icon: "yt" },
        { value: "Medium", icon: "md" },
    ];

    const handlePlatformChange = (value) => {
        setData("platform", value);
        // Set the icon based on the selected platform
        const selectedPlatform = platformOptions.find(
            (option) => option.value === value
        );
        if (selectedPlatform) {
            setData("icon", selectedPlatform.icon);
        }
    };

    return (
        <AdminLayout>
            <Head title="Create Social Link" />

            <div className="mb-6">
                <h1 className="text-2xl font-bold mb-2">Add New Social Link</h1>
                <p className="text-zinc-600 dark:text-zinc-400">
                    Add a new social media link to your website.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Social Link Details</CardTitle>
                    <CardDescription>
                        Enter the details for your social media link
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="platform">Platform</Label>
                                <Select
                                    onValueChange={handlePlatformChange}
                                    defaultValue={data.platform}
                                >
                                    <SelectTrigger className="mt-1">
                                        <SelectValue placeholder="Select platform" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {platformOptions.map((option) => (
                                            <SelectItem
                                                key={option.value}
                                                value={option.value}
                                            >
                                                {option.value}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
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
                                    placeholder="e.g. li, tw, dr"
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
                                    placeholder="https://example.com/profile"
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
                                Create Social Link
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
