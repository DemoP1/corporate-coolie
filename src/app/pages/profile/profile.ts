import { ChangeDetectionStrategy, Component } from "@angular/core";
import { LucideAngularModule,Mail, Phone,User ,MapPin} from "lucide-angular";

@Component({
    selector: 'app-profile',
    template: `
    <!-- Profile Page Layout using Tailwind CSS -->
<div class="min-h-screen bg-gray-50 p-10 font-sans">
  <div class="max-w-4xl mx-auto">
    
    <h1 class="text-2xl font-bold text-gray-900 mb-8">My Profile</h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
      
      <!-- Left Side: Profile Card -->
      <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
        <div class="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
          SK
        </div>
        <h2 class="text-lg font-bold text-gray-900 leading-tight">Sashi Kumar</h2>
        <p class="text-gray-400 text-sm italic leading-tight">@sashi30</p>
      </div>

      <!-- Right Side: Info Cards -->
      <div class="md:col-span-2 flex flex-col gap-6">
        
        <!-- Contact Information Section -->
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-gray-900 font-bold mb-6">Contact Information</h3>
          
          <div class="space-y-6">
            <!-- Email -->
            <div class="flex items-center gap-4">
              <div class="display:content justify-center">
                <lucide-icon [img]="icons.Mail" class="size-4" />

              </div>
              <div>
                <p class="text-gray-400 text-xs font-medium uppercase tracking-wider">Email</p>
                <p class="text-gray-900 font-semibold">Sashi30@gmail.com</p>
              </div>
            </div>

            <!-- Phone -->
            <div class="flex items-center gap-4">
             <div class="display:content justify-center">
                <lucide-icon [img]="icons.Phone" class="size-4" />

              </div>
              <div>
                <p class="text-gray-400 text-xs font-medium uppercase tracking-wider">Phone</p>
                <p class="text-gray-900 font-semibold">+919932123422</p>
              </div>
            </div>

            <!-- Username -->
            <div class="flex items-center gap-4">
             <div class="display:content justify-center">
                <lucide-icon [img]="icons.User" class="size-4" />

              </div>
              <div>
                <p class="text-gray-400 text-xs font-medium uppercase tracking-wider">Username</p>
                <p class="text-gray-900 font-semibold">Sashi30</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Address Section -->
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-gray-900 font-bold mb-6">Address</h3>
          <div class="flex items-start gap-4">
           <div class="display:content justify-center">
                <lucide-icon [img]="icons.MapPin" class="size-4" />

              </div>
            <div>
              <p class="text-gray-900 font-semibold">SK Road</p>
              <p class="text-gray-500 text-sm">Thane, 544123</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

    `,
    imports:[LucideAngularModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Profile {
    protected readonly icons={Mail,Phone,MapPin,User}
}