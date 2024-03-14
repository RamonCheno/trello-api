import pool from "../database/database.js"

export async function getCategoryById(idCategory) {
    const text = 'SELECT * FROM category WHERE id_category = $1';
    const values = [parseInt(idCategory)];
    const res = await pool.query(text, values);
    return res.rows[0];
}

export async function insertCategory(name) {
    const id = await pool.query("SELECT * FROM category WHERE name_category = ' ' limit 1");

    console.log(id.rows.length);

    if (id.rows.length === 0) {
        const nextId = await rowCounts('id_category', 'category');
        const text = 'INSERT INTO category (id_category, name_category) VALUES($1, $2)';
        const values = [nextId, name];
        const result = await pool.query(text, values);
        return result.rows;
    } else {
        const newResult = await newCategoryById(name);
        return newResult.rows;
    }
}

async function newCategoryById(name) {
    const isEmptyQuery = "SELECT id_category FROM category WHERE name_category = ' '";
    // console.log(isEmptyQuery.length);
    const idVoid = await pool.query(isEmptyQuery);
    console.log(idVoid.rows[0].id_category);
    // console.log(idVoid.rows[0].id_category);
    const query = 'UPDATE category SET name_category = $1 WHERE id_category = $2';
    const values = [name, idVoid.rows[0].id_category];
    const result = await pool.query(query, values);
    return result.rows;
}

async function rowCounts(columnaId, tableName) {
    const text = 'SELECT MAX(' + columnaId + ') AS max_id FROM ' + tableName;
    // const value = [columnaId, tableName];
    const result = await pool.query(text);
    const maxRow = (result.rows[0].max_id || 0) + 1;
    return maxRow;
}

export async function getCategoryAll() {
    const result = await pool.query('SELECT * FROM category ORDER BY id_category');
    return result.rows;
}

export async function updateCategory(id, name) {
    const query = 'UPDATE category SET name_category = $1 WHERE id_category = $2';
    const values = [name, id];
    const result = await pool.query(query, values);
    return result.rows;
}

export async function deleteNameCategory(id) {
    const query = "UPDATE category SET name_category = ' ' WHERE id_category = $1";
    const value = [id];
    const result = await pool.query(query, value);
    return result.rows;
}

export async function deleteLastCategory() {
    const idDelete = await pool.query("SELECT MAX(id_category) as max_id FROM category");
    const query = "DELETE FROM category WHERE id_category = $1";
    const value = [idDelete.rows[0].max_id];
    const result = await pool.query(query, value);
    return result.rows;
}