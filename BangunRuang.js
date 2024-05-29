//Hitung Luas Alas Prisma Segi Lima
function HitungLuasAlas (sisi, alas){
    if (alas <= 0 || sisi <= 0) {
        throw new TypeErrorError('Alas dan Sisi harus lebih dari nol');
    }
    if (typeof sisi !== 'number' || typeof alas !== 'number') {
        throw new TypeError('Sisi dan Alas harus berupa angka');
    }
    return (5 / 2) * sisi * alas;
    
}
//Hitung Volume Prisma Segi Lima
function HitungVolume (luasAlas, tinggi){
    if (luasAlas <= 0 || tinggi <= 0) {
        throw new TypeError('Luas Alas dan Tinggi prisma harus lebih dari nol');
    }
    if (typeof luasAlas !== 'number' || typeof tinggi !== 'number') {
        throw new TypeError('Luas Alas dan Tinggi harus berupa angka');
    }
    return luasAlas * tinggi;
    
}

export {HitungLuasAlas, HitungVolume};