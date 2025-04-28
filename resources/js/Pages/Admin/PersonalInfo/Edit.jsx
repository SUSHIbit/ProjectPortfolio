import React from 'react';
import { useForm, Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Textarea } from '@/Components/ui/textarea';
import { Alert, AlertDescription } from '@/Components/ui/alert';

export default function EditPersonalInfo({ personalInfo, flash }) {
    const { data, setData, put, processing, errors } = useForm({
        name: personalInfo.name || '',
        role: personalInfo.role || '',
        short_description: personalInfo.short_description || '',
        about_description: personalInfo.about_description || '',
        kudos_text: personalInfo.kudos_text || '',
        contact_description: personalInfo.contact_description || '',
        contact_email: personalInfo.contact_email || '',
    });

    const { data: cvData, setData: setCvData, post: uploadCv, progress } = useForm({
        cv_file: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('admin.personal-info.update'));
    };

    const handleCvUpload = (e) => {
        e.preventDefault();
        uploadCv(route('admin.cv.upload'), {
            forceFormData: true,
            preserveScroll: true,
        });
    };

    return (
        <AdminLayout>
            <Head title="Edit Personal Info" />
            
            <div className="mb-6">
                <h1 className="text-2xl font-bold mb-2">Edit Personal Information</h1>
                <p className="text-zinc-600 dark:text-zinc-400">Update your personal details displayed on your website.</p>
            </div>
            
            {flash.message && (
                <Alert className="mb-6">
                    <AlertDescription>{flash.message}</AlertDescription>
                </Alert>
            )}
            
            <div className="grid grid-cols-1 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Basic Information</CardTitle>
                        <CardDescription>This information appears on all pages</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        className="mt-1"
                                    />
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                </div>
                                
                                <div>
                                    <Label htmlFor="role">Role/Title</Label>
                                    <Input
                                        id="role"
                                        value={data.role}
                                        onChange={(e) => setData('role', e.target.value)}
                                        className="mt-1"
                                    />
                                    {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
                                </div>
                                
                                <div>
                                    <Label htmlFor="short_description">Short Description (Home Page)</Label>
                                    <Textarea
                                        id="short_description"
                                        value={data.short_description}
                                        onChange={(e) => setData('short_description', e.target.value)}
                                        className="mt-1"
                                        rows={3}
                                    />
                                    {errors.short_description && <p className="text-red-500 text-sm mt-1">{errors.short_description}</p>}
                                </div>
                                
                                <div>
                                    <Label htmlFor="about_description">About Description</Label>
                                    <Textarea
                                        id="about_description"
                                        value={data.about_description}
                                        onChange={(e) => setData('about_description', e.target.value)}
                                        className="mt-1"
                                        rows={6}
                                    />
                                    {errors.about_description && <p className="text-red-500 text-sm mt-1">{errors.about_description}</p>}
                                </div>
                                
                                <div>
                                    <Label htmlFor="kudos_text">Kudos Text</Label>
                                    <Textarea
                                        id="kudos_text"
                                        value={data.kudos_text}
                                        onChange={(e) => setData('kudos_text', e.target.value)}
                                        className="mt-1"
                                        rows={4}
                                    />
                                    {errors.kudos_text && <p className="text-red-500 text-sm mt-1">{errors.kudos_text}</p>}
                                </div>
                                
                                <div>
                                    <Label htmlFor="contact_description">Contact Description</Label>
                                    <Textarea
                                        id="contact_description"
                                        value={data.contact_description}
                                        onChange={(e) => setData('contact_description', e.target.value)}
                                        className="mt-1"
                                        rows={3}
                                    />
                                    {errors.contact_description && <p className="text-red-500 text-sm mt-1">{errors.contact_description}</p>}
                                </div>
                                
                                <div>
                                    <Label htmlFor="contact_email">Contact Email</Label>
                                    <Input
                                        id="contact_email"
                                        type="email"
                                        value={data.contact_email}
                                        onChange={(e) => setData('contact_email', e.target.value)}
                                        className="mt-1"
                                    />
                                    {errors.contact_email && <p className="text-red-500 text-sm mt-1">{errors.contact_email}</p>}
                                </div>
                            </div>
                            
                            <Button type="submit" disabled={processing}>
                                Save Changes
                            </Button>
                        </form>
                    </CardContent>
                </Card>
                
                <Card>
                    <CardHeader>
                        <CardTitle>CV / Resume</CardTitle>
                        <CardDescription>Upload your CV for the About page</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleCvUpload} className="space-y-6">
                            <div>
                                <Label htmlFor="cv_file">CV File (PDF recommended)</Label>
                                <Input
                                    id="cv_file"
                                    type="file"
                                    onChange={(e) => setCvData('cv_file', e.target.files[0])}
                                    className="mt-1"
                                />
                                {errors.cv_file && <p className="text-red-500 text-sm mt-1">{errors.cv_file}</p>}
                                
                                {progress && (
                                    <div className="w-full bg-zinc-200 rounded-full h-2.5 mt-2">
                                        <div 
                                            className="bg-zinc-600 h-2.5 rounded-full" 
                                            style={{ width: `${progress.percentage}%` }}
                                        ></div>
                                    </div>
                                )}
                                
                                {personalInfo.cv_file && (
                                    <div className="mt-2 text-sm">
                                        Current CV: <a href={personalInfo.cv_file} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View</a>
                                    </div>
                                )}
                            </div>
                            
                            <Button type="submit" disabled={!cvData.cv_file || processing}>
                                Upload CV
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}