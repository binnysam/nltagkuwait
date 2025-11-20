import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TestimonyCardProps {
  imageUrl: string;
  title: string;
  description: string;
  videoUrl: string;
}

export default function TestimonyCard({
  imageUrl,
  title,
  description,
  videoUrl,
}: TestimonyCardProps) {
  return (
    <Card className="max-w-sm mx-auto rounded-xl border overflow-hidden pt-0">
      {/* Top Section with Image */}
      <div className="w-full relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          quality={80}
          priority
          // It's good practice to provide sizes for better performance
          sizes="(max-width: 640px) 100vw, 384px"
        />
      </div>

      {/* Content Section - Using CardContent */}
      <CardContent>
        {/* Using the title prop */}
        <h3 className="headline">{title}</h3>
        {/* Using the description prop */}
        <p className="subtitle">{description}</p>
      </CardContent>

      {/* Button Section - Using CardFooter and Shadcn Button component */}
      <CardFooter className="flex gap-2.5">
        {/* Shadcn Button with custom class for primary style */}
        <Button variant="outline" className="rounded-full" asChild>
          <a href="/service-timing">Read more</a>
        </Button>
        <Button variant="outline" className="rounded-full" asChild>
          <a href={`${videoUrl}`} target="_blank" rel="noopener noreferrer">
            Watch video
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
