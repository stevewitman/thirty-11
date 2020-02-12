export interface Project {
  id: string,
  title: string,
	details: string,
	importanceLevel: number
}

export const emptyProject: Project = {
  id: '',
  title: '',
	details: '',
	importanceLevel: 0
}