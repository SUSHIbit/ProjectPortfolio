import React from 'react';
import { useForm, Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Checkbox } from '@/Components/ui/checkbox';

export default function EditInternetLink({ internetLink }) {
    const { data, setData, put, processing, errors } = useForm({
        platform: internetLink.platform || '',
        url: internetLink.url || '',
        order: internetLink.order || 0,
        active: internetLink.active,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('admin.internet-links.update', internetLink.id));
    };

    return (
        <AdminLayout>
            <Head title="Edit Internet Link" />
            
            <div className="mb-6">
                <h1 className="text-2xl font-bold mb-2">Edit Internet Link</h1>
                <p className="text-zinc-600 dark:text-zinc-400">Update your internet link details.</p>
            </div>
            
            <Card>
                <CardHeader>
                    <CardTitle>Internet Link Details</CardTitle>
                    <CardDescription>Modify the details for your internet link</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="platform">Platform</Label>
                                <Input
                                    id="platform"
                                    value={data.platform}
                                    onChange={(e) => setData('platform', e.target.value)}
                                    className="mt-1"
                                />
                                {errors.platform && <p className="text-red-500 text-sm mt-1">{errors.platform}</p>}
                            </div>
                            
                            <div>
                                <Label htmlFor="url">URL</Label>
                                <Input
                                    id="url"
                                    value={data.url}
                                    onChange={(e) => setData('url', e.target.value)}
                                    className="mt-1"
                                />
                                {errors.url && <p className="text-red-500 text-sm mt-1">{errors.url}</p>}
                            </div>
                            
                            <div>
                                <Label htmlFor="order">Display Order</Label>
                                <Input
                                    id="order"
                                    type="number"
                                    value={data.order}
                                    onChange={(e) => setData('order', e.target.value)}
                                    className="mt-1"
                                />
                                <p className="text-xs text-zinc-500 mt-1">Lower numbers appear first.</p>
                                {errors.order && <p className="text-red-500 text-sm mt-1">{errors.order}</p>}
                            </div>
                            
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="active"
                                    checked={data.active}
                                    onCheckedChange={(checked) => setData('active', checked)}
                                />
                                <Label htmlFor="active">Active (visible on website)</Label>
                            </div>
                        </div>
                        
                        <div className="flex space-x-2">
                            <Button type="submit" disabled={processing}>
                                Update Internet Link
                            </Button>
                            <Button type="button" variant="outline" onClick={() => window.history.back()}>
                                Cancel
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </AdminLayout>
    );
}