import React from 'react';

type Props = {
};

export const UploadItem: React.FC<Props> = () => {
  return <div className="mb-6">
    <label htmlFor="file-upload" className="flex overflow-hidden block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block text-sm font-medium text-gray-900 dark:text-gray-300">
        <div className="bg-gray-800 p-2.5 text-white"> Custom Upload</div>
        <div className="p-2.5"> No file selected</div>
    </label>
    <input className="hidden" id="file-upload" type="file"/>
    <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div>
</div>
};
