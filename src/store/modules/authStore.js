const state = {
  checklists: [{
    id: 1,
    name: 'Wishlist',
    items: [{
      id: 1,
      name: 'TV 50 inches',
      done: false
    }]
  }]
}

const getters = {
  checklistCount(state) {
    return state.checklists.length;
  },
  completedChecklistCount(state) {
    return state.checklists.filter(checklist => {
      return checklist.items.every(item => item.done);
    }).length;
  },
  itemsCount(state) {
    return state.checklists.reduce((count, checklist) => {
      return count + checklist.items.length;
    }, 0);
  },
  completedItemsCount(state) {
    return state.checklists.reduce((count, checklist) => {
      return checklist.items.reduce((count, item) => {
        return count + (item.done ? 1 : 0);
      }, count);
    }, 0);
  }
}

const actions = {
  toggle(context, payload) {
    context.commit('toggle', payload);
}
}

const mutations = {
  toggle(state, payload) {
    let item = findItemByIds(state, payload.checklistId, payload.itemId);
    if(item) {
        item.done = !item.done;
    }
}
}

export default {
  state,
  getters,
  actions,
  mutations
}
