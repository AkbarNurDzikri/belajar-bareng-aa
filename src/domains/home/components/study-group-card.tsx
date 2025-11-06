import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useModalStore } from "@/shared/store/modal-store";
import { Calendar, SquarePen, Users } from "lucide-react";
import { GroupSchedule } from "./group-schedule";
import { stringTruncate } from "@/shared/utils/string-truncate";
import { sendChat } from "../utils/send-chat";

interface Props {
  groupName: string;
  maxSlot: number;
  registered: number;
  schedules: { day: string; startTime: string; endTime: string }[];
}

export const StudyGroupCard = ({
  groupName,
  maxSlot,
  registered,
  schedules,
}: Props) => {
  const sisaSlot = maxSlot - registered;
  const { openModal, closeAll } = useModalStore();

  return (
    <Card className="p-0 overflow-hidden min-w-4/12 flex shrink-0 my-5">
      <CardContent className="p-0">
        <div className="p-5 flex items-center justify-between bg-violet-200">
          <div className="flex flex-col">
            <span className="font-semibold">
              Kelompok {stringTruncate(groupName, 8)}
            </span>
            {registered}/{maxSlot} siswa
          </div>
          <Users />
        </div>

        <div className="p-5">
          <p className="font-semibold">Anggota :</p>

          {registered === 0 && (
            <p className="text-muted-foreground">Belum ada anggota</p>
          )}

          {registered > 0 && sisaSlot > 0 && (
            <p className="text-green-700 font-bold animate-caret-blink">
              {sisaSlot} slot tersedia ✨
            </p>
          )}

          {sisaSlot === 0 && (
            <p className="text-pink-500 animate-pulse">
              Maaf quota sudah penuh 🙏
            </p>
          )}
        </div>

        <div className="p-5 flex flex-col gap-2">
          <Button
            variant="outline"
            className="w-full hover:cursor-pointer"
            onClick={() =>
              openModal({
                title: <span>Jadwal kelompok {groupName}</span>,
                content: (
                  <>
                    {schedules.map((s, i) => (
                      <div key={i} className="">
                        <GroupSchedule
                          day={s.day}
                          startTime={s.startTime}
                          endTime={s.endTime}
                        />
                      </div>
                    ))}
                    <Button
                      onClick={() => closeAll()}
                      className="w-full bg-violet-700 hover:cursor-pointer hover:bg-violet-800"
                    >
                      Tutup
                    </Button>
                  </>
                ),
              })
            }
          >
            <Calendar /> Lihat jadwal
          </Button>
          <Button
            className="w-full bg-violet-700 hover:cursor-pointer hover:bg-violet-800"
            onClick={() => window.open(sendChat(groupName), "_blank")}
          >
            <SquarePen /> Daftar kelompok ini
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
