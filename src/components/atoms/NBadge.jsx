import React from 'react'

export default function NBadge() {
  return (
    <div>
      <div class="p-5 flex flex-col space-y-4">
        <div class="flex flex-col space-y-2">
          <div>Basic badges</div>
          <div class="flex space-x-2">
            <div style="padding-top: 0.1em; padding-bottom: 0.1rem" class="text-xs px-3 bg-gray-200 text-gray-800 rounded-full">Badge</div>
            <div style="padding-top: 0.1em; padding-bottom: 0.1rem" class="text-xs px-3 bg-red-200 text-red-800 rounded-full">Badge</div>
            <div style="padding-top: 0.1em; padding-bottom: 0.1rem" class="text-xs px-3 bg-orange-200 text-orange-800 rounded-full">Badge</div>
            <div style="padding-top: 0.1em; padding-bottom: 0.1rem" class="text-xs px-3 bg-yellow-200 text-yellow-800 rounded-full">Badge</div>
            <div style="padding-top: 0.1em; padding-bottom: 0.1rem" class="text-xs px-3 bg-green-200 text-green-800 rounded-full">Badge</div>
            <div style="padding-top: 0.1em; padding-bottom: 0.1rem" class="text-xs px-3 bg-teal-200 text-teal-800 rounded-full">Badge</div>
            <div style="padding-top: 0.1em; padding-bottom: 0.1rem" class="text-xs px-3 bg-blue-200 text-blue-800 rounded-full">Badge</div>
            <div style="padding-top: 0.1em; padding-bottom: 0.1rem" class="text-xs px-3 bg-purple-200 text-purple-800 rounded-full">Badge</div>
            <div style="padding-top: 0.1em; padding-bottom: 0.1rem" class="text-xs px-3 bg-indigo-200 text-indigo-800 rounded-full">Badge</div>
            <div style="padding-top: 0.1em; padding-bottom: 0.1rem" class="text-xs px-3 bg-pink-200 text-pink-800 rounded-full">Badge</div>
          </div>
        </div>

        <div class="flex flex-col space-y-2">
          <div>Large badges</div>
          <div class="flex space-x-2">
            <div style="padding-top: 0.1em; padding-bottom: 0.1rem" class="text-sm px-3 bg-gray-200 text-gray-800 rounded-full">Badge</div>
            <div style="padding-top: 0.1em; padding-bottom: 0.1rem" class="text-sm px-3 bg-red-200 text-red-800 rounded-full">Badge</div>
            <div style="padding-top: 0.1em; padding-bottom: 0.1rem" class="text-sm px-3 bg-orange-200 text-orange-800 rounded-full">Badge</div>
            <div style="padding-top: 0.1em; padding-bottom: 0.1rem" class="text-sm px-3 bg-yellow-200 text-yellow-800 rounded-full">Badge</div>
            <div style="padding-top: 0.1em; padding-bottom: 0.1rem" class="text-sm px-3 bg-green-200 text-green-800 rounded-full">Badge</div>
            <div style="padding-top: 0.1em; padding-bottom: 0.1rem" class="text-sm px-3 bg-teal-200 text-teal-800 rounded-full">Badge</div>
            <div style="padding-top: 0.1em; padding-bottom: 0.1rem" class="text-sm px-3 bg-blue-200 text-blue-800 rounded-full">Badge</div>
            <div style="padding-top: 0.1em; padding-bottom: 0.1rem" class="text-sm px-3 bg-purple-200 text-purple-800 rounded-full">Badge</div>
            <div style="padding-top: 0.1em; padding-bottom: 0.1rem" class="text-sm px-3 bg-indigo-200 text-indigo-800 rounded-full">Badge</div>
            <div style="padding-top: 0.1em; padding-bottom: 0.1rem" class="text-sm px-3 bg-pink-200 text-pink-800 rounded-full">Badge</div>
          </div>
        </div>

        <div class="flex flex-col space-y-2">
          <div>Badge with dot</div>
          <div class="flex space-x-2">
            <div style="padding-top: 0.2em; padding-bottom: 0.2rem" class="flex items-center space-x-1 text-xs px-2 bg-gray-200 text-gray-800 rounded-full">
              <div style="width: 0.4rem; height: 0.4rem" class="bg-gray-500 rounded-full"></div>
              <div>Badge</div>
            </div>
            <div style="padding-top: 0.2em; padding-bottom: 0.2rem" class="flex items-center space-x-1 text-sm px-2 bg-gray-200 text-gray-800 rounded-full">
              <div style="width: 0.4rem; height: 0.4rem" class="bg-gray-500 rounded-full"></div>
              <div>Badge</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
