// import { Perfil } from '@/components/component/perfil';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image"
import radar from "@/app/radar.jpg"
import { Separator } from "@/components/ui/separator"

const CuestionarioPage = () => {
  return (
    <>
      <div className="w-full max-w-md mx-auto bg-background rounded-2xl overflow-hidden">
      <div className="bg-primary h-32 relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <Avatar className="w-24 h-24 border-4 border-background">
            <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="px-6 pt-16 pb-6 space-y-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold">John Doe</h2>
          <p className="text-muted-foreground">Software Engineer</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image src={radar} alt="radar" width={200} height={200} />
          <div className="space-y-2">
            <div className="text-sm font-medium text-muted-foreground">About Me</div>
            <p className="text-sm text-muted-foreground">
              I am a passionate software engineer with a strong background in full-stack web development. I love
              building scalable and user-friendly applications using the latest technologies.
            </p>
          </div>
        </div>
        <Separator />
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="text-sm font-medium text-muted-foreground">Certifications</div>
            <div className="flex items-center gap-2">
              <AwardIcon />
              <span className="text-sm">AWS Certified Developer</span>
            </div>
            <div className="flex items-center gap-2">
              <AwardIcon  />
              <span className="text-sm">Scrum Master Certified</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium text-muted-foreground">Recommendations</div>
            <div className="flex items-center gap-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <div className="text-sm font-medium">Jane Doe</div>
                <div className="text-xs text-muted-foreground">Engineering Manager, Acme Inc.</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <div className="text-sm font-medium">John Smith</div>
                <div className="text-xs text-muted-foreground">CTO, Globex Corporation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

function AwardIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>
  )
}


export default CuestionarioPage;