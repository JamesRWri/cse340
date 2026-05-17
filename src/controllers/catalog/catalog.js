import { getAllCourses, getCourseById, getSortedSections } from '../../models/catalog/catalog.js';

export const catalogPage = (req, res, next) => {
    try {
        const courses = getAllCourses();
        res.render('catalog', {
            title: 'Course Catalog',
            courses: courses
        });
    } catch (error) {
        next(error);
    }
};

export const courseDetailPage = (req, res, next) => {
    try {
        const courseId = req.params.id?.toUpperCase(); // e.g., 'CS121'
        const sortBy = req.query.sort || 'time';       // e.g., 'professor', 'room', 'time'

        const courseData = getCourseById(courseId);

        if (!courseData) {
            return next();
        }

        const sortedSections = getSortedSections(courseData.sections, sortBy);

        const localizedCourse = {
            ...courseData,
            sections: sortedSections
        };

        res.render('course-detail', {
            title: `${localizedCourse.id}: ${localizedCourse.title}`,
            course: localizedCourse,
            currentSort: sortBy
        });
    } catch (error) {
        next(error);
    }
};