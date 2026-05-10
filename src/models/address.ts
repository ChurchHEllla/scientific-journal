// Интерфейс для сотрудника (строка в таблице)
export interface StaffMember {
    position: string;   // Должность (например: "Заместитель начальника...")
    fullName: string;   // ФИО (например: "САФИНА Лилиана Михайловна")
    roomNumber: string; // Номер комнаты/кабинета (например: "815н")
    email: string;      // Email (например: "vestnik@madi.ru")
    phone: string;      // Телефон (например: "8 (499) 346-01-68 доб. 3152")
}

// Основной интерфейс структуры
export interface ContactInfo {
    url?: string;       // URL страницы или ресурса (если нужен, иначе можно убрать)
    address: string;    // Почтовый адрес (например: "125319, Москва...")
    people: StaffMember[]; // Список сотрудников
}