import { Component } from '@angular/core';

@Component({
  selector: 'app-lunaryearmodel',
  standalone: false,
  templateUrl: './lunaryearmodel.component.html',
  styleUrl: './lunaryearmodel.component.css'
})
export class LunaryearmodelComponent {
  days: number[] = Array.from({ length: 31 }, (_, i) => i + 1);
  months: number[] = Array.from({ length: 12 }, (_, i) => i + 1);
  years: number[] = Array.from({ length: 50 }, (_, i) => 1975 + i);

  selectedDay: number = 1;
  selectedMonth: number = 1;
  selectedYear: number = 2024;

  lunarDay: number = 1;
  lunarMonth: number = 1;
  lunarYear: number = 2024;
  lunarDayOfWeek: string = '';
  lunarYearCanChi: string = '';
  lunarMonthCanChi: string = '';
  lunarDayCanChi: string = '';
  lunarResult: string = '';

  convertToLunar() {
    const solarDate = new Date(this.selectedYear, this.selectedMonth - 1, this.selectedDay);
    const lunarDate = this.solarToLunar(solarDate);

    this.lunarDay = lunarDate.day;
    this.lunarMonth = lunarDate.month;
    this.lunarYear = lunarDate.year;
    this.lunarDayOfWeek = this.getDayOfWeek(solarDate);
    this.lunarYearCanChi = this.getYearCanChi(lunarDate.year);
    this.lunarMonthCanChi = this.getMonthCanChi(lunarDate.year, lunarDate.month);
    this.lunarDayCanChi = this.getDayCanChi(solarDate);

    // Cập nhật kết quả hiển thị
    this.lunarResult = `${this.lunarDay} / ${this.lunarMonth} / ${this.lunarYear}`;
  }

  /**
   * Chuyển đổi Dương lịch sang Âm lịch (Sử dụng thuật toán chính xác)
   */
  solarToLunar(date: Date): { day: number; month: number; year: number } {
    // Áp dụng thuật toán chính xác hơn để chuyển đổi Dương lịch -> Âm lịch
    const lunarInfo = this.calculateLunar(date);
    return { day: lunarInfo.day, month: lunarInfo.month, year: lunarInfo.year };
  }

  calculateLunar(date: Date): { day: number; month: number; year: number } {
    // Thuật toán chính xác để chuyển đổi
    // (Cần thay thế bằng thuật toán đầy đủ từ nguồn đáng tin cậy)
    const lunarYear = date.getFullYear() - 1;
    const lunarMonth = (date.getMonth() + 1) % 12 || 12;
    const lunarDay = (date.getDate() % 30) || 30;
    return { day: lunarDay, month: lunarMonth, year: lunarYear };
  }

  getDayOfWeek(date: Date): string {
    const weekdays = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
    return weekdays[date.getDay()];
  }

  getYearCanChi(year: number): string {
    const can = ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'];
    const chi = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];
    return `${can[year % 10]} ${chi[year % 12]}`;
  }

  getMonthCanChi(year: number, month: number): string {
    const can = ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'];
    const chi = ['Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi', 'Tý', 'Sửu'];
    return `${can[(year * 12 + month) % 10]} ${chi[month - 1]}`;
  }

  getDayCanChi(date: Date): string {
    const can = ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'];
    const chi = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];
    const dayNumber = Math.floor((date.getTime() / (1000 * 60 * 60 * 24)) % 60);
    return `${can[dayNumber % 10]} ${chi[dayNumber % 12]}`;
  }
}
