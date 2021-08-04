import Knex from 'knex';

export async function up(knex : Knex){
//Cria a tabela
    return knex.schema.createTable("point_items", table => {
        table.increments('id').primary();
        table.integer('point_id')
        .notNullable()
        .references('id')
        .inTable('points');
        table.integer('point_items')
        .notNullable()
        .references('id')
        .inTable('items');

    });
}

export async function down(knex : Knex){
//Voltar atras (Deletar a Tabela)

    return knex.schema.dropTable('point_items');

}