import { fetchTags } from '../../hooks/hooks.server';

export async function load() {
  const tagsLists: TagsLists = await fetchTags();

  return {
    tagsLists,
  };
}
