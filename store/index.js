export const state = () => ({
  chapterOneSubSections: false,
  chapterTwoSubSections: false,
  chapterThreeSubSections: false,

})

export const mutations = {
  chapterOneSC: (state) => {
    state.chapterOneSubSections = true
    state.chapterTwoSubSections = false
  },
  chapterTwoSC: (state) => {
    state.chapterOneSubSections = false
    state.chapterTwoSubSections = true
  },
  chapterThreeSC: (state) => {
    state.chapterOneSubSections = false
    state.chapterTwoSubSections = false
    state.chapterThreeSubSections = true

  },
}

export const actions = {}
