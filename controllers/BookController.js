const { Book } = require("../models");
const findAllBooks = async (req, res) => {
  const data = await Book.findAll();

  res.json({
    message: "ini dari router",
    data: data,
  });
};

const detailBook = async (req, res) => {
  let id = parseInt(req.body.id);

  const data = await Book.findByPk(id);
  res.json({
    message: "ini dari router",
    data: data,
  });
};

const tambahBuku = async (req, res) => {
  try {
    const data = req.body;

    const result = await Book.create(data);
    res.json({
      result: result,
    });
    //res.send("TAMBAH DATA BUKU");
  } catch (error) {
    res.json({
      message: "error : " + error,
    });
  }
};

const deleteBuku = async (req, res) => {
  try {
    //ambil daa dari request
    const id = req.body.id;
    
    //hapus data dari database
    const result = await Book.destroy({
      where: {
        id: id,
      },
    });
    //tampilkan status
    res.json({
      message: "Buku berhasil dihapus",
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan saat menghapus buku",
    });
  }
};

const updateBuku = async (req, res) => {
  try {
    //ambil data dari request
    const id = req.body.id;
    
    const newData = req.body;
    //hapus data dari database
    const result = await Book.update(newData,{
      where: {
        id: id,
      },
    });
    //tampilkan status data baru
    res.json({
      message: "Buku berhasil di update",
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan saat mengupdate buku",
    });
  }
};

module.exports = { findAllBooks, detailBook, tambahBuku, deleteBuku, updateBuku };
