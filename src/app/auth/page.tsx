'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function AuthPage() {
	const [isLogin, setIsLogin] = useState(true);

	return (
		<div data-theme='business' className='min-h-screen bg-base-200'>
			{/* Header */}
			<div className='navbar bg-base-100 shadow-lg'>
				<div className='navbar-start'>
					<Link href='/' className='btn btn-ghost text-xl font-bold'>
						← Back to Ray Galloway Bookkeeping
					</Link>
				</div>
				<div className='navbar-center'>
					<h1 className='text-xl font-semibold'>Client Portal</h1>
				</div>
				<div className='navbar-end'></div>
			</div>

			<div className='flex items-center justify-center min-h-[calc(100vh-4rem)] p-6'>
				<div className='card w-full max-w-md bg-base-100 shadow-xl'>
					<div className='card-body'>
						{/* Tab Headers */}
						<div className='tabs tabs-boxed mb-6'>
							<button
								className={`tab flex-1 ${
									isLogin ? 'tab-active' : ''
								}`}
								onClick={() => setIsLogin(true)}>
								Login
							</button>
							<button
								className={`tab flex-1 ${
									!isLogin ? 'tab-active' : ''
								}`}
								onClick={() => setIsLogin(false)}>
								Register
							</button>
						</div>

						{isLogin ? (
							/* Login Form */
							<div>
								<h2 className='text-2xl font-bold text-center mb-6'>
									Welcome Back!
								</h2>
								<p className='text-center text-sm opacity-70 mb-6'>
									Access your financial dashboard and reports
								</p>

								<form className='space-y-4'>
									<div className='form-control'>
										<label className='label'>
											<span className='label-text'>
												Email
											</span>
										</label>
										<input
											type='email'
											placeholder='Enter your email'
											className='input input-bordered'
											defaultValue='sarah@example.com'
										/>
									</div>

									<div className='form-control'>
										<label className='label'>
											<span className='label-text'>
												Password
											</span>
										</label>
										<input
											type='password'
											placeholder='Enter your password'
											className='input input-bordered'
											defaultValue='password123'
										/>
									</div>

									<div className='form-control'>
										<label className='label cursor-pointer justify-start space-x-2'>
											<input
												type='checkbox'
												className='checkbox checkbox-sm'
											/>
											<span className='label-text text-sm'>
												Remember me
											</span>
										</label>
									</div>

									<div className='form-control mt-6'>
										<Link
											href='/dashboard'
											className='btn btn-primary w-full'>
											Login to Dashboard
										</Link>
									</div>
								</form>

								<div className='divider'>OR</div>

								<div className='text-center space-y-2'>
									<p className='text-sm opacity-70'>
										Demo Credentials:
									</p>
									<p className='text-xs font-mono bg-base-200 p-2 rounded'>
										Email: sarah@example.com
										<br />
										Password: password123
									</p>
								</div>

								<div className='text-center mt-4'>
									<a
										href='#'
										className='link link-primary text-sm'>
										Forgot your password?
									</a>
								</div>
							</div>
						) : (
							/* Registration Form */
							<div>
								<h2 className='text-2xl font-bold text-center mb-6'>
									Create Account
								</h2>
								<p className='text-center text-sm opacity-70 mb-6'>
									Get started with professional bookkeeping
									services
								</p>

								<form className='space-y-4'>
									<div className='grid grid-cols-2 gap-4'>
										<div className='form-control'>
											<label className='label'>
												<span className='label-text'>
													First Name
												</span>
											</label>
											<input
												type='text'
												placeholder='First name'
												className='input input-bordered'
											/>
										</div>
										<div className='form-control'>
											<label className='label'>
												<span className='label-text'>
													Last Name
												</span>
											</label>
											<input
												type='text'
												placeholder='Last name'
												className='input input-bordered'
											/>
										</div>
									</div>

									<div className='form-control'>
										<label className='label'>
											<span className='label-text'>
												Business Name
											</span>
										</label>
										<input
											type='text'
											placeholder='Your business name'
											className='input input-bordered'
										/>
									</div>

									<div className='form-control'>
										<label className='label'>
											<span className='label-text'>
												Email
											</span>
										</label>
										<input
											type='email'
											placeholder='Enter your email'
											className='input input-bordered'
										/>
									</div>

									<div className='form-control'>
										<label className='label'>
											<span className='label-text'>
												Phone
											</span>
										</label>
										<input
											type='tel'
											placeholder='(555) 123-4567'
											className='input input-bordered'
										/>
									</div>

									<div className='form-control'>
										<label className='label'>
											<span className='label-text'>
												Business Type
											</span>
										</label>
										<select className='select select-bordered'>
											<option disabled selected>
												Select your business type
											</option>
											<option>
												Freelancer / Consultant
											</option>
											<option>E-commerce</option>
											<option>
												Restaurant / Food Service
											</option>
											<option>Retail</option>
											<option>
												Professional Services
											</option>
											<option>Other</option>
										</select>
									</div>

									<div className='form-control'>
										<label className='label'>
											<span className='label-text'>
												Password
											</span>
										</label>
										<input
											type='password'
											placeholder='Create a password'
											className='input input-bordered'
										/>
									</div>

									<div className='form-control'>
										<label className='label cursor-pointer justify-start space-x-2'>
											<input
												type='checkbox'
												className='checkbox checkbox-sm'
												required
											/>
											<span className='label-text text-sm'>
												I agree to the{' '}
												<a
													href='#'
													className='link link-primary'>
													Terms of Service
												</a>{' '}
												and{' '}
												<a
													href='#'
													className='link link-primary'>
													Privacy Policy
												</a>
											</span>
										</label>
									</div>

									<div className='form-control mt-6'>
										<button
											type='button'
											className='btn btn-primary w-full'
											onClick={() => setIsLogin(true)}>
											Create Account
										</button>
									</div>
								</form>

								<div className='alert alert-info mt-4'>
									<div className='flex items-start space-x-2'>
										<span>ℹ️</span>
										<div className='text-sm'>
											<p className='font-semibold'>
												What happens next?
											</p>
											<p className='text-xs opacity-80'>
												Ray will review your application
												and set up your bookkeeping
												services within 24 hours.
											</p>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
