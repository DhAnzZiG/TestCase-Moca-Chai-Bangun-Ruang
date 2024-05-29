import { expect } from "chai";
import {HitungLuasAlas, HitungVolume} from './BangunRuang.js';

describe('HVB001 - Fitur Operasi Bangun Ruang', function(){
    let tinggi;
    let luasAlas;
    let volume;
    beforeEach(function() {
        // Set nilai default sebelum setiap tes dijalankan
        const sisi = 5;
        const alas = 4;   
        tinggi = 10;
        luasAlas = HitungLuasAlas(sisi, alas);
        volume = HitungVolume(luasAlas, tinggi);
    });
    describe('Hitung Luas Alas dulu', function(){
        it('1. Test Case (+) Semua Parameter Valid', function(){
            expect(luasAlas).to.equal(50); // (5 / 2) * sisi * alas;
        })
        it('2. Test Case (-) Parameter tidak Valid', function(){
            expect(() => HitungLuasAlas(-5, 4)).to.throw();
            expect(() => HitungLuasAlas(5, -4)).to.throw();
            expect(() => HitungLuasAlas(0, 4)).to.throw();
            expect(() => HitungLuasAlas(5, 0)).to.throw();
        })
        it('3. Test Case (-) Parameter bukan Angka', function(){
            expect(() => HitungLuasAlas('a', 4)).to.throw();
            expect(() => HitungLuasAlas(5, 'b')).to.throw();
            expect(() => HitungLuasAlas('', 4)).to.throw();
            expect(() => HitungLuasAlas(5, '')).to.throw();
        })
    })
    describe('Hitung Luas Volume', function(){
        it('1. Test Case (+) Semua Parameter Valid', function(){
            expect(volume).to.equal(500); // luasAlas (50) * tinggi (10);
        })
        it('2. Test Case (-) Parameter tidak Valid', function(){
            expect(() => HitungVolume(-10, 10)).to.throw();
            expect(() => HitungVolume(10, -10)).to.throw();
            expect(() => HitungVolume(0, 10)).to.throw();
            expect(() => HitungVolume(10, 0)).to.throw();
        })
        it('3. Test Case (-) Parameter bukan Angka', function(){
            expect(() => HitungVolume('a', 10)).to.throw();
            expect(() => HitungVolume(10, 'b')).to.throw();
            expect(() => HitungVolume('', 10)).to.throw();
            expect(() => HitungVolume(10, '')).to.throw();
        })
    })
})