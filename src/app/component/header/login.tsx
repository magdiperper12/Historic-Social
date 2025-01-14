/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from 'react';
import { LuMessageCircleMore } from 'react-icons/lu';
import { IoIosNotifications } from 'react-icons/io';

const Login = () => {
	const [dropdownType, setDropdownType] = useState<
		'message' | 'notification' | null
	>(null);

	const toggleDropdown = (type: 'message' | 'notification') => {
		setDropdownType((prev) => (prev === type ? null : type));
	};

	return (
		<div className='p-4'>
			<ul className='flex flex-col md:flex-row gap-4 justify-center md:justify-start'>
				<div className='flex items-center gap-4'>
					{/* Message Icon */}
					<li className='relative'>
						<button
							onClick={() => toggleDropdown('message')}
							aria-label='Toggle Messages'
							className='text-2xl text-blue-500 hover:scale-90 transition-transform duration-200'>
							<div className='relative'>
								<span className='absolute text-xs text-white -top-1 -left-1 w-4 h-4 flex items-center justify-center rounded-full bg-red-600'>
									3
								</span>
								<LuMessageCircleMore />
							</div>
						</button>
						{dropdownType === 'message' && (
							<div className='absolute right-0 top-10 w-80 bg-white shadow-lg rounded-lg p-4 h-96 transition-opacity duration-300 border border-gray-200'>
								{/* Messages Header */}
								<div className='flex items-center justify-between border-b pb-2 mb-2'>
									<h3 className='text-lg font-semibold text-gray-800'>
										Messages
									</h3>
									<button className='text-blue-500 hover:underline text-sm'>
										See all
									</button>
								</div>

								{/* Messages List */}
								<ul className='space-y-4'>
									{/* Example Message Item */}
									<li className='flex items-start justify-start space-x-3 p-2 hover:bg-gray-100 rounded'>
										<img
											src='https://randomuser.me/api/portraits/men/40.jpg'
											alt='User'
											className='w-10 h-10 rounded-full'
										/>
										<div className='flex-1'>
											<p className='text-sm font-medium text-gray-900'>
												John Doe
											</p>
											<p className='text-sm text-gray-700 truncate text-wrap'>
												Hey! Are you free to talk about the project today?
											</p>
										</div>
										<span className='text-xs text-gray-500'>2m</span>
									</li>
									{/* Add more message items here */}
								</ul>

								{/* Messages Footer */}
								<div className='border-t pt-2 mt-2 text-center'>
									<button className='text-blue-500 hover:underline text-sm'>
										Open Messenger
									</button>
								</div>
							</div>
						)}
					</li>

					{/* Notification Icon */}
					<li className='relative'>
						<button
							onClick={() => toggleDropdown('notification')}
							aria-label='Toggle Notifications'
							className='text-2xl text-blue-500 hover:scale-90 transition-transform duration-200'>
							<div className='relative'>
								<span className='absolute text-xs text-white -top-1 -left-1 w-4 h-4 flex items-center justify-center rounded-full bg-red-600'>
									9
								</span>
								<IoIosNotifications className='text-3xl' />
							</div>
						</button>
						{dropdownType === 'notification' && (
							<div className='absolute right-0 top-10 w-72 bg-white shadow-lg rounded-lg p-4 overflow-auto h-80 transition-opacity duration-300 border border-gray-200'>
								{/* Notification Header */}
								<div className='flex items-center justify-between border-b pb-2 mb-2'>
									<h3 className='text-lg font-semibold text-gray-800'>
										Notifications
									</h3>
									<button className='text-blue-500 hover:underline text-sm'>
										Mark all as read
									</button>
								</div>

								{/* Notification List */}
								<ul className='space-y-3'>
									{/* Example Notification Item */}
									<li className='flex items-start space-x-3 p-2 hover:bg-gray-100 rounded'>
										<img
											src='https://randomuser.me/api/portraits/men/15.jpg'
											alt='User'
											className='w-10 h-10 rounded-full'
										/>
										<div>
											<p className='text-sm text-gray-700'>
												<span className='font-medium text-gray-900'>
													John Doe
												</span>{' '}
												liked your post.{' '}
												<span className='text-gray-500'>2m ago</span>
											</p>
										</div>
									</li>
									{/* Add more items here */}
								</ul>

								{/* Notification Footer */}
								<div className='border-t pt-2 mt-2 text-center'>
									<button className='text-blue-500 hover:underline text-sm'>
										See all notifications
									</button>
								</div>
							</div>
						)}
					</li>
				</div>
			</ul>
		</div>
	);
};

export default Login;
