<?php


namespace App\Repositories\Todo;

use App\Models\Todo;
use Illuminate\Http\Request;

class TodoRepositoryEloquent implements TodoRepositoryInterface
{
    public function all(Request $request)
    {
        $limit = $request->query('limit', null);
        $offset = $request->query('offset', null);
        return Todo::offset($offset * $limit)->limit($limit)->orderBy('id', 'ASC')->get();
    }

    public function create(array $data)
    {
        return Todo::create($data);
    }

    public function findOrFail(int $id)
    {
        return Todo::findOrFail($id);
    }

    public function update(Todo $todo, array $data)
    {
        $todo->update($data);
        return $todo;
    }

    public function delete(Todo $todo)
    {
        $todo->delete();
    }
}