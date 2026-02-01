import React from 'react'

const Profile = () => {
  return (
           <div class="w-full relative">
            <button type="button"
                class="modal-button mx-auto py-2 px-4 text-sm bg-white text-black border border-gray-200 rounded-md cursor-pointer font-medium text-center shadow-xs transition-all duration-500 hover:bg-gray-100 flex items-center justify-center"
                data-pd-overlay="#edit-profile-modal" data-modal-target="edit-profile-modal"
                data-modal-toggle="edit-profile-modal">
                Edit Profile</button>
            <div id="edit-profile-modal"
                class="pd-overlay hidden w-full h-full fixed top-0 left-0 z-60 overflow-x-hidden overflow-y-hidden ">
                <div
                    class="opacity-0 ease-out min-h-screen sm:max-w-2xl sm:w-full sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500 flex flex-col items-center justify-center">
                    <div class="flex flex-col bg-white rounded-lg gap-4 py-6 max-w-2xl w-full relative">
                        <button type="button" class="pd-dropdown-toggle close-modal-button absolute top-4 right-4"
                            data-pd-overlay="#edit-profile-modal" data-modal-target="edit-profile-modal">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.75732 7.75745L16.2426 16.2427" stroke="black" stroke-width="2"
                                    stroke-linecap="round" class="my-path"></path>
                                <path d="M16.2426 7.75745L7.75732 16.2427" stroke="black" stroke-width="2"
                                    stroke-linecap="round" class="my-path"></path>
                            </svg>
                        </button>
                        <div class="flex flex-col gap-2 px-6">
                            <h4 class="text-lg font-semibold">
                                Edit profile</h4>
                        </div>
                        <div class="relative">
                            <div
                                class="h-40 rounded-t-lg bg-linear-to-r from-orange-400 via-pink-500 to-purple-600 relative">
                                <div class="absolute top-4 right-4 flex gap-2"><button
                                        class="flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
                                        type="button"><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M3.58487 19L7.07189 15.2455C7.69252 14.4869 8.00284 14.1076 8.40938 14.0633C8.47386 14.0563 8.53887 14.0555 8.60349 14.0611C9.01094 14.0961 9.32986 14.4682 9.9677 15.2123C10.6306 15.9857 10.962 16.3723 11.381 16.4005C11.4473 16.4049 11.5139 16.4027 11.5797 16.394C11.996 16.3387 12.3016 15.9312 12.9127 15.1164L14.3606 13.1858C15.11 12.1867 15.4847 11.6871 15.9919 11.693C16.4992 11.6989 16.8622 12.207 17.5881 13.2233L21 18M21 18V11C21 7.22876 21 5.34315 19.8284 4.17157C18.6569 3 16.7712 3 13 3H11C7.22876 3 5.34315 3 4.17157 4.17157C3 5.34315 3 7.22876 3 11V13C3 16.7712 3 18.6569 4.17157 19.8284C5.34315 21 7.22876 21 11 21H18C19.6569 21 21 19.6569 21 18Z"
                                                stroke="#ffffff" stroke-width="2" class="my-path"></path>
                                            <path
                                                d="M12 9C12 10.1046 11.1046 11 10 11C8.89543 11 8 10.1046 8 9C8 7.89543 8.89543 7 10 7C11.1046 7 12 7.89543 12 9Z"
                                                stroke="#ffffff" stroke-width="2" class="my-path"></path>
                                        </svg></button>
                                    <button
                                        class="flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
                                        type="button"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.75732 7.75745L16.2426 16.2427" stroke="#ffffff" stroke-width="2"
                                                stroke-linecap="round" class="my-path"></path>
                                            <path d="M16.2426 7.75745L7.75732 16.2427" stroke="#ffffff" stroke-width="2"
                                                stroke-linecap="round" class="my-path"></path>
                                        </svg></button>
                                </div>
                            </div>
                            <div class="-bottom-12 absolute left-6">
                                <div class="relative">
                                    <div
                                        class="h-24 w-24 rounded-full border-4 border-white bg-linear-to-br from-blue-400 to-purple-500">
                                    </div>
                                    <button
                                        class="absolute right-0 bottom-0 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-colors hover:bg-black/80"
                                        type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-image h-4 w-4" aria-hidden="true">
                                            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                                            <circle cx="9" cy="9" r="2"></circle>
                                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                                        </svg></button>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-4 px-6 pt-14">
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div class="flex flex-col gap-2">
                                    <label class="flex items-center gap-2 text-sm font-medium" for="email">First
                                        Name</label>
                                    <input
                                        class="h-9 w-full rounded-md border px-3 py-1 text-sm shadow-xs outline-none transition-all duration-500 hover:border-gray-300 focus:border-gray-300"
                                        value="Margaret" type="text" / >
                                </div>

                                <div class="flex flex-col gap-2">
                                    <label class="flex items-center gap-2 text-sm font-medium" for="email">Last
                                        Name</label>
                                    <input
                                        class="h-9 w-full rounded-md border px-3 py-1 text-sm shadow-xs outline-none transition-all duration-500 hover:border-gray-300 focus:border-gray-300"
                                        value="Villard" type="text"/>
                                </div>
                            </div>
                            <div class="flex flex-col gap-2">
                                <label class="flex items-center gap-2 text-sm font-medium" for="email">Last
                                    Name</label>
                                <input
                                    class="h-9 w-full rounded-md border px-3 py-1 text-sm shadow-xs outline-none transition-all duration-500 hover:border-gray-300 focus:border-gray-300"
                                    value="margaret-villard-69" type="text"/>
                            </div>

                            <div class="flex flex-col gap-2">
                                <label class="flex items-center gap-2 text-sm font-medium" for="email">Website</label>
                                <input
                                    class="h-9 w-full rounded-md border px-3 py-1 text-sm shadow-xs outline-none transition-all duration-500 hover:border-gray-300 focus:border-gray-300"
                                    value="www.margaret.com" type="text"/>
                            </div>

                            <div class="flex flex-col gap-2">
                                <label class="flex items-center gap-2 text-sm font-medium" for="email">Website</label>
                                <textarea
                                    class="h-24 resize-none w-full rounded-md border px-3 py-1 text-sm shadow-xs outline-none transition-all duration-500 hover:border-gray-300 focus:border-gray-300"
                                    type="text">Hey, I am Margaret, a web developer who loves turning ideas into amazing websites!</textarea>
                            </div>
                        </div>
                        <div class="flex items-center justify-end gap-2 pt-2 px-6">
                            <button type="button"
                                class="pd-dropdown-toggle py-2 px-4 text-sm bg-white text-black border border-[#e5e5e5] rounded-md cursor-pointer font-medium text-center shadow-xs transition-all duration-500 hover:bg-gray-100 close-modal-button"
                                data-pd-overlay="#edit-profile-modal"
                                data-modal-target="edit-profile-modal">Cancel</button>
                            <button type="button"
                                class="py-2 px-4 text-sm text-white rounded-md cursor-pointer font-medium bg-blue-500 text-center shadow-xs transition-all duration-500 hover:bg-blue-600 close-modal-button"
                                data-pd-overlay="#edit-profile-modal" data-modal-target="edit-profile-modal">Save
                                Changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="backdrop" class="fixed hidden top-0 left-0 w-full h-full bg-black/50 z-50"></div>
        </div>
  )
}

export default Profile