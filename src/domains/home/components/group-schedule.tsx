import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock8 } from "lucide-react";

interface Props {
  day: string;
  startTime: string;
  endTime: string;
}
export const GroupSchedule = ({ day, startTime, endTime }: Props) => {
  return (
    <Card className="p-0 overflow-hidden mb-3">
      <CardContent className="p-3 flex items-center justify-between">
        <div>
          <Calendar />
          <span className="font-semibold">{day}</span>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Clock8 />
          <span className="font-semibold">
            {startTime} - {endTime}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};
