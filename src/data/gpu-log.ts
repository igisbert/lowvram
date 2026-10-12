/* nvidia-smi log rows sampled once per second. */

export type GpuPoint = {
  time: string;
  util: number;
  vram: number;
  temp: number;
};

export function parseGpuLog(raw: string): GpuPoint[] {
  return raw
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("timestamp"))
    .map((line) => {
      const cols = line.split(",").map((cell) => cell.trim());
      // Slim format: [time, util, vram, temp]. Legacy 7-column nvidia-smi
      // logs keep working: [time, util, vram, total, power, temp, clocks].
      const [time, util, vram, temp] =
        cols.length > 4 ? [cols[0], cols[1], cols[2], cols[5]] : cols;
      return {
        time,
        util: Number.parseFloat(util),
        vram: Number.parseFloat(vram),
        temp: Number.parseFloat(temp),
      };
    })
    .filter(
      (point) =>
        point.time &&
        Number.isFinite(point.util) &&
        Number.isFinite(point.vram) &&
        Number.isFinite(point.temp),
    );
}
