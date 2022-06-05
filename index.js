const data = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (data, pengurutan) => {
  pengurutan(data);
  let urut = []
  for (let a = 0; a < data.length; a++) {
    urut.push(`${a + 1 }. ${data[a]}`)
 }
 return urut;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (names) => {
  return names.sort();
}

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (names) => {
  return names.reverse();
}

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(data, sortAscending)?.join("\n"));
  console.log(sorter?.(data, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names: data,
};
