<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UserSaveToken extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasColumn('users', 'user_token')) {
            Schema::table('users', function (Blueprint $table) {
                $table->text('user_token')->after('remember_token')->nullable();
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        if (Schema::hasColumn('users', 'user_token')) {
            Schema::table('users', function (Blueprint $table) {
                $table->dropColumn(['user_token']);
            });
        }
    }
}
