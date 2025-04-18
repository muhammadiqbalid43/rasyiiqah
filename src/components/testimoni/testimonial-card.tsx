import { Card, CardContent } from "../ui/card";
import YoutubeEmbed from "./youtube-embed";

interface TestimonialCardProps {
  name: string;
  videoId: string;
}

const TestimonialCard = ({ name, videoId }: TestimonialCardProps) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <YoutubeEmbed videoId={videoId} title={`${name}'s Testimonial`} />
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
