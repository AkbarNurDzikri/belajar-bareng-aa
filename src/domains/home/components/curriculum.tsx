import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const Curriculum = () => {
  return (
    <section className="p-5 space-y-5 bg-slate-100" id="curriculum">
      {/* Judul */}
      <div className="text-center space-y-2">
        <h2 className="text-xl md:text-3xl font-bold text-violet-700">
          Kurikulum Belajar Bareng Aa
        </h2>
        <p className="text-muted-foreground text-base md:text-lg">
          Belajar dasar yang menyenangkan — CaLisTung, kreativitas, dan
          karakter!
        </p>
        <p className="text-sm md:text-base text-gray-500">
          Anak diajak belajar membaca, menulis, berhitung, dan bahasa Inggris
          dengan cara yang seru, santai, dan penuh semangat eksplorasi.
        </p>
      </div>

      {/* Jadwal & Durasi */}
      <Card>
        <CardHeader>
          <CardTitle className="text-violet-700 md:text-lg font-bold">
            📘 Jadwal & Durasi
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium w-1/3">
                  Durasi per sesi
                </TableCell>
                <TableCell>1 jam 15 menit</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Hari belajar</TableCell>
                <TableCell>Senin – Jumat (5 hari per minggu)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Pendekatan</TableCell>
                <TableCell>
                  Belajar aktif dan menyenangkan di lingkungan yang akrab (home
                  learning style)
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Tujuan Pembelajaran */}
      <Card>
        <CardHeader>
          <CardTitle className="text-violet-700 md:text-lg font-bold">
            🎯 Tujuan Pembelajaran
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>No</TableHead>
                <TableHead>Tujuan</TableHead>
                <TableHead>Penjelasan</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>
                  Menguatkan dasar membaca, menulis, dan berhitung (Calistung)
                </TableCell>
                <TableCell>
                  Anak dibimbing membaca tahap demi tahap, menulis per kata, dan
                  berhitung dengan logika sederhana.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2</TableCell>
                <TableCell>
                  Menumbuhkan rasa ingin tahu dan berpikir logis
                </TableCell>
                <TableCell>
                  Anak dibimbing memahami sebab-akibat dan menyelesaikan masalah
                  sederhana.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>3</TableCell>
                <TableCell>
                  Melatih bahasa Inggris dasar dengan cara menyenangkan
                </TableCell>
                <TableCell>
                  Melalui lagu, permainan, dan percakapan ringan.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>4</TableCell>
                <TableCell>
                  Mengembangkan kreativitas dan karakter positif
                </TableCell>
                <TableCell>
                  Anak belajar ekspresi diri, tanggung jawab, dan kerja sama
                  lewat seni & cerita.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Penutup */}
      <div className="text-justify mt-5">
        <p className="text-base md:text-lg">
          🌟 Belajar jadi lebih menyenangkan! Dengan bimbingan yang hangat dan
          kegiatan seru, anak akan tumbuh percaya diri, cerdas, dan kreatif
          bersama{" "}
          <span className="font-semibold text-primary">Belajar Bareng Aa</span>.
          🎉
        </p>
      </div>
    </section>
  );
};
