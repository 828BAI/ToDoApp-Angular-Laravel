<?php


namespace App\Repositories\Todo;

use App\Models\Todo;
use Illuminate\Http\Request;

interface TodoRepositoryInterface
{
    public function all(Request $request);

    public function create(array $data);

    public function findOrFail(int $id);

    public function update(Todo $todo, array $data);

    public function delete(Todo $todo);
}