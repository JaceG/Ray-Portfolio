'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { ArrowLeft, Info } from 'lucide-react';

export default function AuthPage() {
	return (
		<div className='min-h-screen bg-gray-50'>
			{/* Header */}
			<header className='bg-white border-b'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex justify-between items-center h-16'>
						<Link
							href='/'
							className='flex items-center text-lg font-medium hover:text-primary transition-colors'>
							<ArrowLeft className='mr-2 h-4 w-4' />
							Back to Ray Galloway Bookkeeping
						</Link>
						<h1 className='text-xl font-semibold'>Client Portal</h1>
						<div className='w-40'></div>
					</div>
				</div>
			</header>

			<div className='flex items-center justify-center min-h-[calc(100vh-4rem)] p-6'>
				<Card className='w-full max-w-md'>
					<CardHeader>
						<CardTitle className='text-center'>
							Welcome to Your Dashboard
						</CardTitle>
						<CardDescription className='text-center'>
							Access your financial reports and communicate with
							Ray
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Tabs defaultValue='login' className='w-full'>
							<TabsList className='grid w-full grid-cols-2'>
								<TabsTrigger value='login'>Login</TabsTrigger>
								<TabsTrigger value='register'>
									Register
								</TabsTrigger>
							</TabsList>

							<TabsContent value='login'>
								<div className='space-y-4'>
									<div className='text-center mb-4'>
										<h2 className='text-2xl font-bold'>
											Welcome Back!
										</h2>
										<p className='text-sm text-muted-foreground mt-1'>
											Access your financial dashboard and
											reports
										</p>
									</div>

									<form className='space-y-4'>
										<div className='space-y-2'>
											<Label htmlFor='email'>Email</Label>
											<Input
												id='email'
												type='email'
												placeholder='Enter your email'
												defaultValue='sarah@example.com'
											/>
										</div>

										<div className='space-y-2'>
											<Label htmlFor='password'>
												Password
											</Label>
											<Input
												id='password'
												type='password'
												placeholder='Enter your password'
												defaultValue='password123'
											/>
										</div>

										<div className='flex items-center space-x-2'>
											<Checkbox id='remember' />
											<label
												htmlFor='remember'
												className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
												Remember me
											</label>
										</div>

										<Button asChild className='w-full'>
											<Link href='/dashboard'>
												Login to Dashboard
											</Link>
										</Button>
									</form>

									<div className='relative'>
										<div className='absolute inset-0 flex items-center'>
											<span className='w-full border-t' />
										</div>
										<div className='relative flex justify-center text-xs uppercase'>
											<span className='bg-white px-2 text-muted-foreground'>
												Demo Credentials
											</span>
										</div>
									</div>

									<div className='bg-qb-green-50 p-3 rounded-lg text-center'>
										<p className='text-sm text-muted-foreground mb-1'>
											Try it out with:
										</p>
										<p className='text-xs font-mono'>
											Email: sarah@example.com
											<br />
											Password: password123
										</p>
									</div>

									<div className='text-center'>
										<a
											href='#'
											className='text-sm text-primary hover:underline'>
											Forgot your password?
										</a>
									</div>
								</div>
							</TabsContent>

							<TabsContent value='register'>
								<div className='space-y-4'>
									<div className='text-center mb-4'>
										<h2 className='text-2xl font-bold'>
											Create Account
										</h2>
										<p className='text-sm text-muted-foreground mt-1'>
											Get started with professional
											bookkeeping services
										</p>
									</div>

									<form className='space-y-4'>
										<div className='grid grid-cols-2 gap-4'>
											<div className='space-y-2'>
												<Label htmlFor='firstName'>
													First Name
												</Label>
												<Input
													id='firstName'
													placeholder='First name'
												/>
											</div>
											<div className='space-y-2'>
												<Label htmlFor='lastName'>
													Last Name
												</Label>
												<Input
													id='lastName'
													placeholder='Last name'
												/>
											</div>
										</div>

										<div className='space-y-2'>
											<Label htmlFor='businessName'>
												Business Name
											</Label>
											<Input
												id='businessName'
												placeholder='Your business name'
											/>
										</div>

										<div className='space-y-2'>
											<Label htmlFor='registerEmail'>
												Email
											</Label>
											<Input
												id='registerEmail'
												type='email'
												placeholder='Enter your email'
											/>
										</div>

										<div className='space-y-2'>
											<Label htmlFor='phone'>Phone</Label>
											<Input
												id='phone'
												type='tel'
												placeholder='(555) 123-4567'
											/>
										</div>

										<div className='space-y-2'>
											<Label htmlFor='businessType'>
												Business Type
											</Label>
											<Select>
												<SelectTrigger>
													<SelectValue placeholder='Select your business type' />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value='freelancer'>
														Freelancer / Consultant
													</SelectItem>
													<SelectItem value='ecommerce'>
														E-commerce
													</SelectItem>
													<SelectItem value='restaurant'>
														Restaurant / Food
														Service
													</SelectItem>
													<SelectItem value='retail'>
														Retail
													</SelectItem>
													<SelectItem value='professional'>
														Professional Services
													</SelectItem>
													<SelectItem value='other'>
														Other
													</SelectItem>
												</SelectContent>
											</Select>
										</div>

										<div className='space-y-2'>
											<Label htmlFor='registerPassword'>
												Password
											</Label>
											<Input
												id='registerPassword'
												type='password'
												placeholder='Create a password'
											/>
										</div>

										<div className='flex items-start space-x-2'>
											<Checkbox
												id='terms'
												className='mt-1'
											/>
											<label
												htmlFor='terms'
												className='text-sm leading-tight peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
												I agree to the{' '}
												<a
													href='#'
													className='text-primary hover:underline'>
													Terms of Service
												</a>{' '}
												and{' '}
												<a
													href='#'
													className='text-primary hover:underline'>
													Privacy Policy
												</a>
											</label>
										</div>

										<Button className='w-full'>
											Create Account
										</Button>
									</form>

									<div className='bg-blue-50 border border-blue-200 rounded-lg p-4'>
										<div className='flex items-start space-x-2'>
											<Info className='h-5 w-5 text-blue-600 mt-0.5' />
											<div className='text-sm'>
												<p className='font-semibold text-blue-900'>
													What happens next?
												</p>
												<p className='text-blue-700 text-xs mt-1'>
													Ray will review your
													application and set up your
													bookkeeping services within
													24 hours.
												</p>
											</div>
										</div>
									</div>
								</div>
							</TabsContent>
						</Tabs>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
